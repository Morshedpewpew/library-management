import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorService } from 'src/author/author.service';
import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/publisher-create.dto';
import { UpdatePublisherDto } from './dto/publisher-update.dto';
import { Publisher } from './entity/publisher.entity';

@Injectable()
export class PublisherService {
    constructor(
      // @Inject(forwardRef(()=> AuthorService))
       private authorService: AuthorService, 
        @InjectRepository(Publisher)
        private publisherRepository: Repository<Publisher>,){}
          get(){
              return this.publisherRepository.find(
               
              );
            }
            create(createPublisherDto: CreatePublisherDto){
              return this.publisherRepository.save(createPublisherDto);
            }
            update(updatePublisherDto: UpdatePublisherDto,ID: number){
              return this.publisherRepository.update(ID,updatePublisherDto);
            }
            show(ID: number){
              return this.publisherRepository.findOne({where: {ID} });
            }
            async showPublisherAuthor(ID: number){
              //console.log(ID);
              const authorList= await this.publisherRepository.createQueryBuilder('publishers')

                .select([
                 //'publishers.ID',
                 //'books.ID',
                 'authors.ID'
                ])
                .leftJoin('publishers.books', 'books')
                .leftJoin('books.authors','authors')
                .andWhere('publishers.ID = :id',{id:ID})
                .getRawMany()
              //console.log(authorList[2].authors_ID)

             console.log(authorList)
              const auth=[];
              for(let i = 0; i<authorList.length;i++){
                //console.log(authorList.length)
                 auth[i]=  await this.authorService.showAuthOnly(authorList[i].authors_ID);

            
              }
              return auth
              //}
              
              


              
                
            }
             
            
            delete(ID: number){
              return this.publisherRepository.delete(ID);
            }
      

}

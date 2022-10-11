import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/entity/book.entity';
import { Publisher } from 'src/publisher/entity/publisher.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/author-create.dto';
import { UpdateAuthorDto } from './dto/author-update.dto';
import { Author } from './entity/author.entity';
@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private authorRepository: Repository<Author>,){}
          async get() {
              return this.authorRepository.find(
                {
                  relations: ['books']
            
                }
              );
            }
            create(createAuthorDto: CreateAuthorDto, books: Book){
              createAuthorDto['books'] = [books];
             // createAuthorDto['publishers'] = [publishers];
              delete createAuthorDto.book_id;
              //delete createAuthorDto.publisher_id;
              console.log(createAuthorDto);
               
              return this.authorRepository.save(createAuthorDto);
            }
            update(updateAuthorDto: UpdateAuthorDto,ID: number){
              return this.authorRepository.update(ID,updateAuthorDto);
            }
            show(ID: number){
              return this.authorRepository.findOne({where: {ID},relations:['books']});
            }
            
              
      
      
            delete(ID: number){
              return this.authorRepository.delete(ID);
            }
      

}

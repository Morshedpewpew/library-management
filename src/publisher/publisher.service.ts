import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/publisher-create.dto';
import { UpdatePublisherDto } from './dto/publisher-update.dto';
import { Publisher } from './entity/publisher.entity';

@Injectable()
export class PublisherService {
    constructor(
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
            showPublisherAuthor(ID: number){
              return this.publisherRepository.findOne({where: {ID}, relations:['books',"books.authors"]});
            }
             
            
            delete(ID: number){
              return this.publisherRepository.delete(ID);
            }
      

}

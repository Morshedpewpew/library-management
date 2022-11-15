import { Controller, UseFilters } from '@nestjs/common';
import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { AuthorService } from 'src/author/author.service';
import { GlobalExceptionFilter } from '../exception/typeorm.exception';
import { CreatePublisherDto } from './dto/publisher-create.dto';
import { UpdatePublisherDto } from './dto/publisher-update.dto';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {
    constructor(private publisherService: PublisherService, ){}
    @Get(':ID')
     getPublisher(@Param('ID',ParseIntPipe) ID: number){
       return this.publisherService.show(ID);
     }
     @UseFilters(GlobalExceptionFilter)
     @Get(':ID/authors')
     getPublisherAuthor(@Param('ID',ParseIntPipe) ID: number){
       return this.publisherService.showPublisherAuthor(ID);
     }
     
    @Get()
    getPublishers() {
      return this.publisherService.get();
     
    }
    @Post()
    store(@Body() createPublisherDto: CreatePublisherDto){
      //console.log(req.body);
      return this.publisherService.create(createPublisherDto);
    }
    @Patch(':ID')
    update(@Body() updatePublisherDto: UpdatePublisherDto,
    @Param('ID',ParseIntPipe) ID: number,){
      //console.log(req.body);
      return this.publisherService.update(updatePublisherDto,ID);
    }
     
    @Delete(':ID')
    deletePublisher(@Param('ID',ParseIntPipe) ID: number){
        return this.publisherService.delete(ID);
    }
 
}

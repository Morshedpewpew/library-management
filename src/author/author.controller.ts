import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { BookService } from 'src/book/book.service';
import { PublisherService } from 'src/publisher/publisher.service';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/author-create.dto';
import { UpdateAuthorDto } from './dto/author-update.dto';

@Controller('author')
export class AuthorController {
    constructor(private bookService: BookService,private authorService: AuthorService){}
    @Get(':ID')
     getAuthor(@Param('ID',ParseIntPipe) ID: number){
       return this.authorService.show(ID);
     }
      
    @Get()
    getAuthors() {
      return this.authorService.get();
     
    }
    @Post()
    async store(@Body() createAuthorDto: CreateAuthorDto){
      //console.log(createAuthorDto);
      const books = await this.bookService.show(createAuthorDto.book_id)
      //const publishers = await this.publisherService.show(createAuthorDto.publisher_id)
      
      
      return this.authorService.create(createAuthorDto,books);
    }
    @Patch(':ID')
    update(@Body() updateAuthorDto: UpdateAuthorDto,
    @Param('ID',ParseIntPipe) ID: number,){
      //console.log(req.body);
      return this.authorService.update(updateAuthorDto,ID);
    }
     
    @Delete(':ID')
    deleteAuthor(@Param('ID',ParseIntPipe) ID: number){
        return this.authorService.delete(ID);
    }


}

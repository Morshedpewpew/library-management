import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { CategoryService } from 'src/category/category.service';
import { PublisherService } from 'src/publisher/publisher.service';
import { BookService } from "./book.service";
import { CreateBookDto } from './dto/book-create.dto';
import { UpdateBookDto } from './dto/book-update.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService, private categoryService:CategoryService,
      private publisherService:PublisherService){}
    @Get(':ID')
     getBook(@Param('ID',ParseIntPipe) ID: number){
       return this.bookService.show(ID);
     }
     
    @Get()
    getBooks() {
      return this.bookService.get();
     
    }
    @Post()
    async store(@Body() createBookDto: CreateBookDto){
      
      const category = await this.categoryService.getOne(createBookDto.category_id)
      const publisher = await this.publisherService.show(createBookDto.publisher_id)
      
      

      return this.bookService.create(createBookDto,category,publisher);
      //return this.bookService.create(createBookDto,publisher);
    }
    @Patch(':ID')
    update(@Body() updateBookDto: UpdateBookDto,
    @Param('ID',ParseIntPipe) ID: number,){
      //console.log(req.body);
      return this.bookService.update(updateBookDto,ID);
    }
     
    @Delete(':ID')
    deleteBook(@Param('ID',ParseIntPipe) ID: number){
        return this.bookService.delete(ID);
    }

}

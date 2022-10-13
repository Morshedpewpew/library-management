import { Controller, Put } from '@nestjs/common';
import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { BookService } from 'src/book/book.service';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category-create.dto';
import { UpdateCategoryDto } from './dto/category-update.dto';

@Controller('category')
export class CategoryController {
    constructor( private categoryService: CategoryService){}

    @Get(':ID')
     get(@Param('ID',ParseIntPipe) ID: number){
       return this.categoryService.getOne(ID);
     }
     
    @Get()
    getCategory() {
      return this.categoryService.get();
     
    }
    @Post()
    store(@Body() createCategoryDto: CreateCategoryDto){
      //console.log(req.body);
      return this.categoryService.create(createCategoryDto);
    }
    
    @Patch(':ID')
    update(@Body() updateCategoryDto: UpdateCategoryDto,
    @Param('ID',ParseIntPipe) ID: number,){
      //console.log(req.body);
      return this.categoryService.update(updateCategoryDto,ID);
    }
    
     
    @Delete(':ID')
    deleteCategory(@Param('ID',ParseIntPipe) ID: number){
        return this.categoryService.delete(ID);
    }


}

import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category-create.dto';
import { UpdateCategoryDto } from './dto/category-update.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}
    @Get(':ID')
     getUser(@Param('ID',ParseIntPipe) ID: number){
       return this.categoryService.show(ID);
     }
     
    @Get()
    getUsers() {
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
    deleteUser(@Param('ID',ParseIntPipe) ID: number){
        return this.categoryService.delete(ID);
    }


}

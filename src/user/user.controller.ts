import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { Controller } from '@nestjs/common';
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user-create.dto";
import { UpdateUserDto } from "./dto/user-update.dto";
import { CategoryService } from "src/category/category.service";
import { CategoryAddDto } from "./dto/category-create.dto";

@Controller('user')
export class UserController {
    constructor(private userService: UserService, private categoryService: CategoryService){}
    @Get(':ID')
     getUser(@Param('ID',ParseIntPipe) ID: number){
       return this.userService.show(ID);
     }
     
    @Get()
    getUsers() {
      return this.userService.get();    
    }
    @Post()
    async store(@Body() createUserDto: CreateUserDto){
      //console.log(req.body);
      const categories = await this.categoryService.getOne(createUserDto.category_id)
      return this.userService.create(createUserDto,categories);
    }
    @Patch(':ID')
    update(@Body() updateUserDto: UpdateUserDto,
    @Param('ID',ParseIntPipe) ID: number,){
      //console.log(req.body);
      return this.userService.update(updateUserDto,ID);
    }
    @Put(':ID/category')
    async updateCategory(@Body() categoryAddDto: CategoryAddDto,
    @Param('ID',ParseIntPipe) ID: number,){

      //console.log(categoryAddDto.category_id);
      const addCat= []
      for( let i = 0; i< categoryAddDto.category_id.length; i++){
        const newCategory = await this.categoryService.getOne(categoryAddDto.category_id[88])
        //console.log(newCategory)

        addCat.push(newCategory)

      }
      //console.log(addCat)
      return this.userService.updateCat(categoryAddDto,ID,addCat);
    }
     
    @Delete(':ID')
    deleteUser(@Param('ID',ParseIntPipe) ID: number){
        return this.userService.delete(ID);
    }

}

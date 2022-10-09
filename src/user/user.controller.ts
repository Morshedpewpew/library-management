import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { Controller } from '@nestjs/common';
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user-create.dto";
import { UpdateUserDto } from "./dto/user-update.dto";
import { CategoryService } from "src/category/category.service";

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
     
    @Delete(':ID')
    deleteUser(@Param('ID',ParseIntPipe) ID: number){
        return this.userService.delete(ID);
    }

}

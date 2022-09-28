import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { Controller } from '@nestjs/common';
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user-create.dto";
import { UpdateUserDto } from "./dto/user-update.dto";

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Get()
    getUsers() {
      return this.userService.get();
    }
    @Post()
    store(@Body() createUserDto: CreateUserDto){
      //console.log(req.body);
      return this.userService.create(createUserDto);
    }
    @Patch(':ID')
    update(@Body() updateUserDto: UpdateUserDto,
    @Param('ID',ParseIntPipe) ID: number,){
      //console.log(req.body);
      return this.userService.update(updateUserDto,ID);
    }
     @Get(':ID')
     getUser(@Param('ID',ParseIntPipe) ID: number){
       return this.userService.show(ID);
     }
     @Get('Book')
     getBook(@Param('Book',ParseIntPipe) Book: string){
       return this.userService.BookShow(Book);
     }
    @Delete(':ID')
    deleteUser(@Param('ID',ParseIntPipe) ID: number){
        return this.userService.delete(ID);
    }

}

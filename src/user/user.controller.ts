import { Body, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
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
    update(@Body() updateUserDto: UpdateUserDto,@Param() param:{ID: number} ){
      //console.log(req.body);
      return this.userService.update(updateUserDto,param);
    }
     @Get(':ID')
     getUser(@Param() param:{ID: number}){
       return this.userService.show(param);
     }
    @Delete(':ID')
    deleteUser(@Param() param:{ID: number}){
        return this.userService.delete(param);
    }

}

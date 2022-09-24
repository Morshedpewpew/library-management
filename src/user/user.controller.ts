import { Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { Controller } from '@nestjs/common';
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Get()
    getUsers() {
      return this.userService.get();
    }
    @Post()
    store(@Req() req:Request){
      //console.log(req.body);
      return this.userService.create(req);
    }
    @Patch(':ID')
    update(@Req() req:Request,@Param() param:{ID: number} ){
      //console.log(req.body);
      return this.userService.update(req,param);
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

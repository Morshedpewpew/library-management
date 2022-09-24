import { Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUsers() {
      return { name: 'Morshed', email: 'i.morshed2016@gmail.com' };
    }
    @Post()
    store(@Req() req:Request){
      //console.log(req.body);
      return req.body;
    }
    @Patch(':ID')
    update(@Req() req:Request){
      //console.log(req.body);
      return req.body;
    }
     @Get(':ID')
     getUser(@Param() params:{Idhastobe: number}){
       return params;
     }
    @Delete(':ID')
    deleteUser(@Param() params:{Idhastobe: number}){
      return params;
    }

}

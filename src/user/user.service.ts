import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
    get() {
        return { name: 'Morshed', email: 'i.morshed2016@gmail.com' };
      }
      create(createUserDto: CreateUserDto){
        return createUserDto;
      }
      update(updateUserDto: UpdateUserDto,param :{ID: number}){
        return {body:updateUserDto,param};
      }
      show(param:{ID: number}){
        return param;
      }
      delete(param:{ID: number}){
        return param;
      }

}

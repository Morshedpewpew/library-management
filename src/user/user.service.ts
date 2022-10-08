import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService  {
  constructor(
  @InjectRepository(User)
  private userRepository: Repository<User>,){}
    get():Promise<User[]> {
        return this.userRepository.find();
      }
      create(createUserDto: CreateUserDto){
        return this.userRepository.save(createUserDto);
      }
      update(updateUserDto: UpdateUserDto,ID: number){
        return this.userRepository.update(ID,updateUserDto);
      }
      show(ID: number){
        return this.userRepository.findOne({where: {ID}});
      }
      
      
      delete(ID: number){
        return this.userRepository.delete(ID);
      }

}

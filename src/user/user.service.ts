import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './Entity/user.entity';

@Injectable()
export class UserService {
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
      BookShow(Book: string){
        return this.userRepository.findOne({where: {Book}});
      }
        


      delete(ID: number){
        return this.userRepository.delete(ID);
      }

}

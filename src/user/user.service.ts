import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Category } from 'src/category/entity/category.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService  {
  constructor(
  @InjectRepository(User)
  private userRepository: Repository<User>,){}
    async get() {
        return this.userRepository.find(
          {
            relations: ['categories']
      
          }
        );
      }
      create(createUserDto: CreateUserDto, categories :Category){
        createUserDto['categories'] = [categories];
              delete createUserDto.category_id;
        return this.userRepository.save(createUserDto);
      }
      update(updateUserDto: UpdateUserDto,ID: number){
        return this.userRepository.update(ID,updateUserDto);
      }
      show(ID: number){
        return this.userRepository.findOne({where: {ID},relations:['categories']});
      }
      
      
      delete(ID: number){
        return this.userRepository.delete(ID);
      }

}

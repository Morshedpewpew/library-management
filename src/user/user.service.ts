import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Category } from 'src/category/entity/category.entity';
import { Repository } from 'typeorm';
import { CategoryAddDto } from './dto/category-create.dto';
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
         
        );
      }
      create(createUserDto: CreateUserDto, categories :Category){
        createUserDto['categories'] = [categories];
              delete createUserDto.category_id;
        return this.userRepository.save(createUserDto);
      }
      update(updateUserDto: UpdateUserDto,ID: number){
        console.log(updateUserDto);
        return this.userRepository.update(ID,updateUserDto);
      }
      async updateCat(categoryAddDto: CategoryAddDto, ID: number, newCategoryList:Category[]){
        const library= await this.show(ID)
        //const newCategoryList = (await.getOne(ID)).categories
        
        //console.log(ID);
        //console.log(categoryAddDto);
        //return this.userRepository.update(ID,categoryAddDto);
        for( let i = 0; i< categoryAddDto.category_id.length; i++){
          library.categories.push(newCategoryList[i])
        }
        //const cat= {categories:library }
        console.log(library)
        return this.userRepository.save(library)
         // return this.userRepository.createQueryBuilder()
        //   .update(User) 
        //   .set({
        //     categories:library.categories

        //   })
        //   .where('id =:id',{id: ID})
        //   .execute()
      }

     
      show(ID: number){
        return this.userRepository.findOne({where: {ID},relations:['categories']});
      }
      
      
      delete(ID: number){
        return this.userRepository.delete(ID);
      }

}

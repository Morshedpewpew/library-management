import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/category-create.dto';
import { UpdateCategoryDto } from './dto/category-update.dto';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,){}
          get():Promise<Category[]> {
              return this.categoryRepository.find();
            }
            create(createCategoryDto: CreateCategoryDto){
              return this.categoryRepository.save(createCategoryDto);
            }
            update(updateCategoryDto: UpdateCategoryDto,ID: number){
              return this.categoryRepository.update(ID,updateCategoryDto);
            }
            getOne(ID: number){
              return this.categoryRepository.findOne({where: {ID} });
            }
            
              
      
      
            delete(ID: number){
              return this.categoryRepository.delete(ID);
            }
}

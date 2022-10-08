import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from 'src/book/book.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from './entity/category.entity';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports:[TypeOrmModule.forFeature([Category])],
  exports: [CategoryService],

})
export class CategoryModule {}

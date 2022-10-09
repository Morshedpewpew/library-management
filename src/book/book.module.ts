import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entity/book.entity';
import { CategoryService } from 'src/category/category.service';
import { CategoryModule } from 'src/category/category.module';
import { AuthorModule } from 'src/author/author.module';
import { PublisherModule } from 'src/publisher/publisher.module';


@Module({
  controllers: [BookController],
  providers: [BookService],
  imports:[TypeOrmModule.forFeature([Book]), CategoryModule, PublisherModule  ],
  exports: [BookService,BookModule],

})
export class BookModule {
}

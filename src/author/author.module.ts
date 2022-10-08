import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entity/author.entity';
import { BookModule } from 'src/book/book.module';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService],
  imports:[TypeOrmModule.forFeature([Author]),BookModule ],
  exports: [AuthorService,AuthorModule],
})
export class AuthorModule {}

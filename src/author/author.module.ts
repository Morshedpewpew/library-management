import { forwardRef, Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entity/author.entity';
import { BookModule } from 'src/book/book.module';
import { PublisherModule } from 'src/publisher/publisher.module';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService],
  imports:[TypeOrmModule.forFeature([Author]),forwardRef(() => BookModule)],
  exports: [AuthorService],
})
export class AuthorModule {}

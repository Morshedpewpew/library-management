import { forwardRef, Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entity/publisher.entity';
import { AuthorModule } from 'src/author/author.module';
import { AuthorService } from 'src/author/author.service';
import { BookModule } from 'src/book/book.module';

@Module({
  controllers: [PublisherController],
  providers: [PublisherService],
  imports:[TypeOrmModule.forFeature([Publisher]),forwardRef(() => AuthorModule)],
 exports: [PublisherService,PublisherModule],
})
export class PublisherModule {}

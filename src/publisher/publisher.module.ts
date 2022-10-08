import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entity/publisher.entity';

@Module({
  controllers: [PublisherController],
  providers: [PublisherService],
  imports:[TypeOrmModule.forFeature([Publisher]) ],
  exports: [PublisherService,PublisherModule],
})
export class PublisherModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controllers';
import { typeOrmAsyncConfig, typeOrmConfig } from './config/typeorm.config';
//import { User } from './user/entities/user.entity';

//import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  
  controllers: [AppController],
  
  imports: [UserModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    BookModule,
    AuthorModule,
    CategoryModule,
    PublisherModule,
    
  ],
  //providers: [AppService],
})
export class AppModule {}

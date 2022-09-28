import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { User } from './user/Entity/user.entity';

//import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  
  controllers: [AppController],
  
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'doramon',
      database: 'library_management',
      entities: [User],
      synchronize: true,
    }),
  ],
  //providers: [AppService],
})
export class AppModule {}

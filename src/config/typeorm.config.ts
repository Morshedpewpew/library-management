import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    
    useFactory: async(): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            database: 'library_management',
            username: 'root',
            password: 'doramon',
            entities: [__dirname + './../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
            cli: {
                 migrationsDir: __dirname + '/../database/migrations',
            },
            extra: {
                charset: 'utf8mb4_unicode_ci',
            },
            synchronize: false,
            logging: true
        }
    }
}

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'library_management',
    username: 'root',
    password: 'doramon',
    entities: [__dirname + './../**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    cli: {
         migrationsDir: __dirname + '/../database/migrations',
    },
    extra: {
        charset: 'utf8mb4_unicode_ci',
    },
    logging: true
}
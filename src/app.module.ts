import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { PacksModule } from './packs/packs.module';

import { REQUEST } from '@nestjs/core';
import { createTypeOrmOptions } from './typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // Carga y accede a la configuración de la aplicación desde variables de entorno.
      isGlobal: true,
      envFilePath: '.env',
    }),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forRootAsync({
      useFactory: createTypeOrmOptions,
      inject: [REQUEST],
    }),
    PacksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

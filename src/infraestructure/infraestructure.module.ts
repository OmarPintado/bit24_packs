import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from './microservice/entities';

@Module({
  imports: [TypeOrmModule.forFeature(Object.values(entities))],

  exports: [TypeOrmModule],
})
export class InfraestructureModule {}

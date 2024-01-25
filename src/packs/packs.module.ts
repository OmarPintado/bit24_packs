import { Module } from '@nestjs/common';
import { PacksService } from './packs.service';
import { PacksController } from './packs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { packs } from './entities/pack.entity';
import { InfraestructureModule } from '../infraestructure/infraestructure.module';
import { productospack } from './entities/productospack.entity';

@Module({
  controllers: [PacksController],
  providers: [PacksService],
  imports: [
    TypeOrmModule.forFeature([packs, productospack]),
    InfraestructureModule,
  ],
})
export class PacksModule {}

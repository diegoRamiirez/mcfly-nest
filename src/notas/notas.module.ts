import { Module } from '@nestjs/common';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { Nota, NotaSchema } from 'src/schemas/nota.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Nota.name, schema: NotaSchema }])],
  controllers: [NotasController],
  providers: [NotasService]
})
export class NotasModule {}

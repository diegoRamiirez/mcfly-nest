import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nota, NotaDocument } from 'src/schemas/nota.schema';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@Injectable()
export class NotasService {

  constructor(@InjectModel(Nota.name) private notasModel: Model<NotaDocument>) {}

 async create(createNotaDto: CreateNotaDto): Promise<Nota> {
    const crearNota = new this.notasModel(createNotaDto);
    return await crearNota.save();
  }

  async findAll() {
    return this.notasModel.find();
  }

  async findOne(frase: string): Promise<Nota> {
   const nota = await this.notasModel.findOne({ frase });
    return nota;
  }

  async update(frase: string, updateNotaDto: UpdateNotaDto) {
   const updateNotas = await this.notasModel.updateOne({frase} , {$set:{...updateNotaDto}} );
    return updateNotas;
  }

 
  async findAllFavoritas() {
   const favoritas = await this.notasModel.find({$cast: true});
    return favoritas;

  }
 
}

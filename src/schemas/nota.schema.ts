import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotaDocument = Nota & Document;

 @Schema()
export class Nota {
  
  @Prop()
  frase: string;

  @Prop({ default: false})
  favorita: boolean;
  
}



export const NotaSchema = SchemaFactory.createForClass(Nota);
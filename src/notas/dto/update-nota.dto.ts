import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaDto } from './create-nota.dto';

export class UpdateNotaDto extends PartialType(CreateNotaDto) {
    readonly frase:string;
    readonly favorito: boolean;
    
}

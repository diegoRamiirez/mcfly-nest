import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { HttpStatus } from '@nestjs/common';

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Post('/crear')
  async create(@Res() res,@Body() createNotaDto: CreateNotaDto) {
   const notaCreada = await this.notasService.create(createNotaDto);
    return res.status(HttpStatus.OK).json({
        message:'recived',
        notaCreada
    });
  }

  @Get('/notas')
  findAll() {
    return this.notasService.findAll();
  }

  @Get(':frase')
  findOne(@Param('frase') frase: string) {
    return this.notasService.findOne(frase);
  }

  @Patch(':frase')
  update(@Param('frase') frase: string, @Body() updateNotaDto: UpdateNotaDto) {
    return this.notasService.update( frase, updateNotaDto);
  }

  @Get('/frasesfavoritas')
  findallfavorita() {
    return this.notasService.findAllFavoritas();
  }

}

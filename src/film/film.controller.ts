import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmService } from './film.service';
import { Prisma } from '@prisma/client';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  create(@Body() createFilmDto: Prisma.filmCreateInput) {
    return this.filmService.create(createFilmDto);
  }

  @Get()
  findAll() {
    return this.filmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFilmDto: Prisma.filmUpdateInput,
  ) {
    return this.filmService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmService.remove(+id);
  }
}

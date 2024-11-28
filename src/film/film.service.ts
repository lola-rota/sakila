import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FilmService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createFilmDto: Prisma.filmCreateInput) {
    return this.databaseService.film.create({ data: createFilmDto });
  }

  async findAll() {
    return this.databaseService.film.findMany({});
  }

  async findOne(film_id: number) {
    return this.databaseService.film.findUnique({
      where: { film_id },
    });
  }

  async update(film_id: number, updateFilmDto: Prisma.filmUpdateInput) {
    return this.databaseService.film.update({
      where: { film_id },
      data: updateFilmDto,
    });
  }

  async remove(film_id: number) {
    return this.databaseService.film.delete({
      where: { film_id },
    });
  }
}

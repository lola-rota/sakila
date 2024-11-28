import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RentalService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createRentalDto: Prisma.rentalCreateInput) {
    return this.databaseService.rental.create({ data: createRentalDto });
  }

  async findAll() {
    return this.databaseService.rental.findMany({});
  }

  async findOne(rental_id: number) {
    return this.databaseService.rental.findUnique({
      where: { rental_id },
    });
  }

  async update(rental_id: number, updateRentalDto: Prisma.rentalUpdateInput) {
    return this.databaseService.rental.update({
      where: { rental_id },
      data: updateRentalDto,
    });
  }

  async remove(rental_id: number) {
    return this.databaseService.rental.delete({ where: { rental_id } });
  }
}

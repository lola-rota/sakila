import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCustomerDto: Prisma.customerCreateInput) {
    return this.databaseService.customer.create({ data: createCustomerDto });
  }

  async findAll() {
    return this.databaseService.customer.findMany({});
  }

  async findOne(customer_id: number) {
    return this.databaseService.customer.findUnique({
      where: { customer_id },
    });
  }

  async update(
    customer_id: number,
    updateCustomerDto: Prisma.customerUpdateInput,
  ) {
    return this.databaseService.customer.update({
      where: { customer_id },
      data: updateCustomerDto,
    });
  }

  async remove(customer_id: number) {
    return this.databaseService.customer.delete({
      where: { customer_id },
    });
  }
}

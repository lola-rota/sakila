import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RentalService } from './rental.service';
import { Prisma } from '@prisma/client';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  create(@Body() createRentalDto: Prisma.rentalCreateInput) {
    return this.rentalService.create(createRentalDto);
  }

  @Get()
  findAll() {
    return this.rentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRentalDto: Prisma.rentalUpdateInput,
  ) {
    return this.rentalService.update(+id, updateRentalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(+id);
  }
}

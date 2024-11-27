import { Prisma } from '@prisma/client';

export class Rental implements Prisma.rentalCreateInput {
  rental_date: string | Date;
  return_date?: string | Date;
  last_update?: string | Date;
  payment?: Prisma.paymentCreateNestedManyWithoutRentalInput;
  customer: Prisma.customerCreateNestedOneWithoutRentalInput;
  inventory: Prisma.inventoryCreateNestedOneWithoutRentalInput;
  staff: Prisma.staffCreateNestedOneWithoutRentalInput;
}

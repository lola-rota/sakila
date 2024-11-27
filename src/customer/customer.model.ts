import { Prisma } from '@prisma/client';

export class Customer implements Prisma.customerCreateInput {
  active?: number;
  address: Prisma.addressCreateNestedOneWithoutCustomerInput;
  store: Prisma.storeCreateNestedOneWithoutCustomerInput;
  payment?: Prisma.paymentCreateNestedManyWithoutCustomerInput;
  rental?: Prisma.rentalCreateNestedManyWithoutCustomerInput;
  customer_id: number;
  store_id: number;
  first_name: string;
  last_name: string;
  email?: string;
  address_id: number;
  activebool: boolean;
  create_date: Date;
  last_update?: Date;
}

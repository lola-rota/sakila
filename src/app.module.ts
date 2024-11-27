import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { RentalModule } from './rental/rental.module';
import { FilmModule } from './film/film.module';

@Module({
  imports: [UsersModule, CustomerModule, FilmModule, RentalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

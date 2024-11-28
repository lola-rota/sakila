import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { RentalModule } from './rental/rental.module';
import { FilmModule } from './film/film.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CustomerModule, FilmModule, RentalModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

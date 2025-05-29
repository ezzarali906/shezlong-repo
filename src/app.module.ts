import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TherapistsModule } from './therapists/therapists.module';
import { ClientsModule } from './clients/clients.module';
import { TimeslotsModule } from './timeslots/timeslots.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'shezlong_user',
      password: 'password',
      database: 'shezlong',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TherapistsModule,
    ClientsModule,
    TimeslotsModule,
    BookingsModule,
  ],
})
export class AppModule {}

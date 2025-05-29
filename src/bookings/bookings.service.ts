// src/bookings/bookings.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
  ) {}

  create(data: Partial<Booking>) {
    const booking = this.bookingsRepository.create(data);
    return this.bookingsRepository.save(booking);
  }

  findAll() {
    return this.bookingsRepository.find();
  }

  findOne(id: number) {
    return this.bookingsRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.bookingsRepository.delete(id);
    return { deleted: true };
  }
}

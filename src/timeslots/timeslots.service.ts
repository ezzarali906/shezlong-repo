// src/timeslots/timeslots.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeSlot } from './entities/timeslot.entity';

@Injectable()
export class TimeslotsService {
  constructor(
    @InjectRepository(TimeSlot)
    private timeslotsRepository: Repository<TimeSlot>,
  ) {}

  create(data: Partial<TimeSlot>) {
    const timeslot = this.timeslotsRepository.create(data);
    return this.timeslotsRepository.save(timeslot);
  }

  findAll() {
    return this.timeslotsRepository.find();
  }

  findOne(id: number) {
    return this.timeslotsRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.timeslotsRepository.delete(id);
    return { deleted: true };
  }
}

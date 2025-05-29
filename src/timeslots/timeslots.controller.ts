// src/timeslots/timeslots.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';
import { TimeSlot } from './entities/timeslot.entity';

@Controller('timeslots')
export class TimeslotsController {
  constructor(private readonly timeslotsService: TimeslotsService) {}

  @Post()
  create(@Body() data: Partial<TimeSlot>) {
    return this.timeslotsService.create(data);
  }

  @Get()
  findAll() {
    return this.timeslotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeslotsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeslotsService.remove(+id);
  }
}

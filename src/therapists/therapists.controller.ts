import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TherapistsService } from './therapists.service';
import { Therapist } from './entities/therapist.entity';

@Controller('therapists')
export class TherapistsController {
  constructor(private readonly therapistsService: TherapistsService) {}

  @Post()
  create(@Body() data: Partial<Therapist>) {
    return this.therapistsService.create(data);
  }

  @Get()
  findAll() {
    return this.therapistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.therapistsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.therapistsService.remove(+id);
  }
}

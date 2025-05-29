import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Therapist } from './entities/therapist.entity';

@Injectable()
export class TherapistsService {
  constructor(
    @InjectRepository(Therapist)
    private readonly therapistRepo: Repository<Therapist>,
  ) {}

  async create(data: Partial<Therapist>): Promise<Therapist> {
    const therapist = this.therapistRepo.create(data);
    return this.therapistRepo.save(therapist);
  }

  async findAll(): Promise<Therapist[]> {
    return this.therapistRepo.find();
  }

  async findOne(id: number): Promise<Therapist> {
    const therapist = await this.therapistRepo.findOneBy({ id });
    if (!therapist) throw new NotFoundException('Therapist not found');
    return therapist;
  }

  async remove(id: number): Promise<void> {
    await this.therapistRepo.delete(id);
  }
}

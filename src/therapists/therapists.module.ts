import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TherapistsService } from './therapists.service';
import { TherapistsController } from './therapists.controller';
import { Therapist } from './entities/therapist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Therapist])],
  controllers: [TherapistsController],
  providers: [TherapistsService],
})
export class TherapistsModule {}

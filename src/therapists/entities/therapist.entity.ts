import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TimeSlot } from 'src/timeslots/entities/timeslot.entity';

@Entity()
export class Therapist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialization: string;

  @OneToMany(() => TimeSlot, (slot) => slot.therapist)
  timeSlots?: TimeSlot[];
}

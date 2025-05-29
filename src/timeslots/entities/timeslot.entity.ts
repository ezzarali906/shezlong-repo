import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Therapist } from 'src/therapists/entities/therapist.entity';
import { Booking } from 'src/bookings/entities/booking.entity';

@Entity()
export class TimeSlot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @ManyToOne(() => Therapist, (therapist) => therapist.timeSlots, {
    eager: true,
  })
  therapist: Therapist;

  @OneToMany(() => Booking, (booking) => booking.timeSlot)
  bookings: Booking[];
}

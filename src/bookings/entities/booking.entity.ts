import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from 'src/clients/entities/client.entity';
import { TimeSlot } from 'src/timeslots/entities/timeslot.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, (client) => client.bookings, { eager: true })
  client: Client;

  @ManyToOne(() => TimeSlot, (slot) => slot.bookings, { eager: true })
  timeSlot: TimeSlot;
}

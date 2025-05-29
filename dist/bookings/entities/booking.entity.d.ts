import { Client } from 'src/clients/entities/client.entity';
import { TimeSlot } from 'src/timeslots/entities/timeslot.entity';
export declare class Booking {
    id: number;
    client: Client;
    timeSlot: TimeSlot;
}

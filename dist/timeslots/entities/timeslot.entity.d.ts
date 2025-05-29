import { Therapist } from 'src/therapists/entities/therapist.entity';
import { Booking } from 'src/bookings/entities/booking.entity';
export declare class TimeSlot {
    id: number;
    startTime: Date;
    endTime: Date;
    therapist: Therapist;
    bookings: Booking[];
}

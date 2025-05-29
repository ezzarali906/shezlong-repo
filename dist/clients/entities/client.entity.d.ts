import { Booking } from 'src/bookings/entities/booking.entity';
export declare class Client {
    id: number;
    name: string;
    email: string;
    bookings: Booking[];
}

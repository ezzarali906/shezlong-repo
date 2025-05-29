import { BookingsService } from './bookings.service';
import { Booking } from './entities/booking.entity';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(data: Partial<Booking>): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    findOne(id: string): Promise<Booking>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}

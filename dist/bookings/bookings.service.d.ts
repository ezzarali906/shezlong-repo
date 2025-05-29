import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
export declare class BookingsService {
    private bookingsRepository;
    constructor(bookingsRepository: Repository<Booking>);
    create(data: Partial<Booking>): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}

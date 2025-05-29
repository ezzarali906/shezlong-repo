import { Repository } from 'typeorm';
import { TimeSlot } from './entities/timeslot.entity';
export declare class TimeslotsService {
    private timeslotsRepository;
    constructor(timeslotsRepository: Repository<TimeSlot>);
    create(data: Partial<TimeSlot>): Promise<TimeSlot>;
    findAll(): Promise<TimeSlot[]>;
    findOne(id: number): Promise<TimeSlot>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}

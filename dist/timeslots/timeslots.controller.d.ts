import { TimeslotsService } from './timeslots.service';
import { TimeSlot } from './entities/timeslot.entity';
export declare class TimeslotsController {
    private readonly timeslotsService;
    constructor(timeslotsService: TimeslotsService);
    create(data: Partial<TimeSlot>): Promise<TimeSlot>;
    findAll(): Promise<TimeSlot[]>;
    findOne(id: string): Promise<TimeSlot>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}

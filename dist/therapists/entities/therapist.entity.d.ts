import { TimeSlot } from 'src/timeslots/entities/timeslot.entity';
export declare class Therapist {
    id: number;
    name: string;
    specialization: string;
    timeSlots?: TimeSlot[];
}

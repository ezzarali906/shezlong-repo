import { Repository } from 'typeorm';
import { Therapist } from './entities/therapist.entity';
export declare class TherapistsService {
    private readonly therapistRepo;
    constructor(therapistRepo: Repository<Therapist>);
    create(data: Partial<Therapist>): Promise<Therapist>;
    findAll(): Promise<Therapist[]>;
    findOne(id: number): Promise<Therapist>;
    remove(id: number): Promise<void>;
}

import { TherapistsService } from './therapists.service';
import { Therapist } from './entities/therapist.entity';
export declare class TherapistsController {
    private readonly therapistsService;
    constructor(therapistsService: TherapistsService);
    create(data: Partial<Therapist>): Promise<Therapist>;
    findAll(): Promise<Therapist[]>;
    findOne(id: string): Promise<Therapist>;
    remove(id: string): Promise<void>;
}

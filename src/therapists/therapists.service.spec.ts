import { Test, TestingModule } from '@nestjs/testing';
import { TherapistsService } from './therapists.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Therapist } from './entities/therapist.entity';
import { Repository } from 'typeorm';

describe('TherapistsService', () => {
  let service: TherapistsService;
  let repo: Repository<Therapist>;

  const mockTherapist = {
    id: 1,
    name: 'Dr. John',
    specialization: 'Psychology',
    timeSlots: [],
  };

  const therapistsArray = [mockTherapist];

  const mockRepo = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockResolvedValue(mockTherapist),
    find: jest.fn().mockResolvedValue(therapistsArray),
    findOne: jest.fn().mockResolvedValue(mockTherapist),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TherapistsService,
        {
          provide: getRepositoryToken(Therapist),
          useValue: mockRepo,
        },
      ],
    }).compile();

    service = module.get<TherapistsService>(TherapistsService);
    repo = module.get<Repository<Therapist>>(getRepositoryToken(Therapist));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create() should create and return a therapist', async () => {
    const dto = { name: 'Dr. John', specialization: 'Psychology' };
    const result = await service.create(dto);
    expect(repo.create).toHaveBeenCalledWith(dto);
    expect(repo.save).toHaveBeenCalled();
    expect(result).toEqual(mockTherapist);
  });

  it('findAll() should return array of therapists', async () => {
    const result = await service.findAll();
    expect(repo.find).toHaveBeenCalled();
    expect(result).toEqual(therapistsArray);
  });

  it('findOne() should return one therapist', async () => {
    const result = await service.findOne(1);
    expect(repo.findOne).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockTherapist);
  });

  it('remove() should delete a therapist', async () => {
    const result = await service.remove(1);
    expect(repo.delete).toHaveBeenCalledWith(1);
    expect(result).toEqual({ affected: 1 });
  });
});

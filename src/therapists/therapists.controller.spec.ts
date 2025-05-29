import { Test, TestingModule } from '@nestjs/testing';
import { TherapistsController } from './therapists.controller';
import { TherapistsService } from './therapists.service';

describe('TherapistsController', () => {
  let controller: TherapistsController;
  let service: TherapistsService;

  const mockTherapist = {
    id: 1,
    name: 'Dr. John',
    specialization: 'Psychology',
    timeSlots: [],
  };

  const therapistsArray = [mockTherapist];

  const mockService = {
    create: jest.fn(() => Promise.resolve(mockTherapist)),
    findAll: jest.fn(() => Promise.resolve(therapistsArray)),
    findOne: jest.fn(() => Promise.resolve(mockTherapist)),
    remove: jest.fn(() => Promise.resolve({ affected: 1 })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TherapistsController],
      providers: [{ provide: TherapistsService, useValue: mockService }],
    }).compile();

    controller = module.get<TherapistsController>(TherapistsController);
    service = module.get<TherapistsService>(TherapistsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create() should return created therapist', async () => {
    const dto = { name: 'Dr. John', specialization: 'Psychology' };
    const result = await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual(mockTherapist);
  });

  it('findAll() should return array of therapists', async () => {
    const result = await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
    expect(result).toEqual(therapistsArray);
  });

  it('findOne() should return one therapist', async () => {
    const result = await controller.findOne('1');
    expect(service.findOne).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockTherapist);
  });

  it('remove() should delete therapist', async () => {
    const result = await controller.remove('1');
    expect(service.remove).toHaveBeenCalledWith(1);
    expect(result).toEqual({ affected: 1 });
  });
});

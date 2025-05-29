import { Test, TestingModule } from '@nestjs/testing';
import { TimeslotsService } from './timeslots.service';

const mockTimeSlot = {
  id: 1,
  date: '2025-05-30',
  time: '10:00',
  therapistId: 1,
};

const timeslotsArray = [mockTimeSlot];

const mockTimeslotsService = {
  create: jest.fn(() => Promise.resolve(mockTimeSlot)),
  findAll: jest.fn(() => Promise.resolve(timeslotsArray)),
  findOne: jest.fn(() => Promise.resolve(mockTimeSlot)),
  remove: jest.fn(() => Promise.resolve({ affected: 1 })),
};

describe('TimeslotsService', () => {
  let service: TimeslotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TimeslotsService,
        { provide: TimeslotsService, useValue: mockTimeslotsService },
      ],
    }).compile();

    service = module.get<TimeslotsService>(TimeslotsService);
  });

  it('should create a timeslot', async () => {
    expect(await service.create({} as any)).toEqual(mockTimeSlot);
  });

  it('should return all timeslots', async () => {
    expect(await service.findAll()).toEqual(timeslotsArray);
  });

  it('should return one timeslot', async () => {
    expect(await service.findOne(1)).toEqual(mockTimeSlot);
  });

  it('should remove timeslot', async () => {
    expect(await service.remove(1)).toEqual({ affected: 1 });
  });
});

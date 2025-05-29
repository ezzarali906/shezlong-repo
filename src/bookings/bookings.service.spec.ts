import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from './bookings.service';

const mockBooking = {
  id: 1,
  clientId: 1,
  timeSlotId: 1,
};

const bookingsArray = [mockBooking];

const mockBookingsService = {
  create: jest.fn(() => Promise.resolve(mockBooking)),
  findAll: jest.fn(() => Promise.resolve(bookingsArray)),
  findOne: jest.fn(() => Promise.resolve(mockBooking)),
  remove: jest.fn(() => Promise.resolve({ affected: 1 })),
};

describe('BookingsService', () => {
  let service: BookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingsService,
        { provide: BookingsService, useValue: mockBookingsService },
      ],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
  });

  it('should create a booking', async () => {
    expect(await service.create({} as any)).toEqual(mockBooking);
  });

  it('should return all bookings', async () => {
    expect(await service.findAll()).toEqual(bookingsArray);
  });

  it('should return one booking', async () => {
    expect(await service.findOne(1)).toEqual(mockBooking);
  });

  it('should remove booking', async () => {
    expect(await service.remove(1)).toEqual({ affected: 1 });
  });
});

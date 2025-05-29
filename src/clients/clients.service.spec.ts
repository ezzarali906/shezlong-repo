import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';

const mockClient = {
  id: 1,
  name: 'Client One',
};

const clientsArray = [mockClient];

const mockClientsService = {
  create: jest.fn(() => Promise.resolve(mockClient)),
  findAll: jest.fn(() => Promise.resolve(clientsArray)),
  findOne: jest.fn(() => Promise.resolve(mockClient)),
  remove: jest.fn(() => Promise.resolve({ affected: 1 })),
};

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        { provide: ClientsService, useValue: mockClientsService },
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it('should create a client', async () => {
    expect(await service.create({} as any)).toEqual(mockClient);
  });

  it('should return all clients', async () => {
    expect(await service.findAll()).toEqual(clientsArray);
  });

  it('should return one client', async () => {
    expect(await service.findOne(1)).toEqual(mockClient);
  });

  it('should remove client', async () => {
    expect(await service.remove(1)).toEqual({ affected: 1 });
  });
});

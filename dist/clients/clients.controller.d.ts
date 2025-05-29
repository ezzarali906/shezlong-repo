import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(data: Partial<Client>): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: string): Promise<Client>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}

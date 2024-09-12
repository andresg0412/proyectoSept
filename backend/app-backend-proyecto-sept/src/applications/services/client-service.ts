import { ClientRepositoryInterface } from '../../interfaces/database/ClientRepositoryInterface';
import { Client } from '../../core/domain/entities/client.entity';
import { CreateClientInput } from '../../interfaces/http/CreateClientInput';
import { CreateClientOutput } from '../../interfaces/http/CreateClientOutput';

export interface ClientService {
    create(input: CreateClientInput): Promise<CreateClientOutput>;
    findAll(): Promise<Client[]>;
    findById(id: number): Promise<Client | undefined>;
    save(client: Client): Promise<Client>;
    delete(id: number): Promise<void>;
    countAll(): Promise<number>;
    update(id: number, client: Partial<Client>): Promise<Client | null>;
}

export class ClientServiceImpl implements ClientService {
    constructor(private clientRepository: ClientRepositoryInterface) { }

    create(input: CreateClientInput): Promise<CreateClientOutput> {
        const client = new Client();
        client.name = input.name;
        client.phone = input.phone;

        return this.clientRepository.save(client).then(savedClient => ({
            clientId: savedClient.id,
        }));
    }
    findAll(): Promise<Client[]> {
        return this.clientRepository.findAll();
    }

    findById(id: number): Promise<Client | undefined> {
        return this.clientRepository.findById(id);
    }

    save(client: Client): Promise<Client> {
        return this.clientRepository.save(client);
    }

    delete(id: number): Promise<void> {
        return this.clientRepository.delete(id);
    }

    update(id: number, client: Partial<Client>): Promise<Client | null> {
        return this.findById(id).then(existingClient => {
            if (!existingClient) return null;
    
            Object.assign(existingClient, client);
    
            return this.save(existingClient);
        });
    }

    countAll(): Promise<number> {
        return this.clientRepository.countAll();
    }
}
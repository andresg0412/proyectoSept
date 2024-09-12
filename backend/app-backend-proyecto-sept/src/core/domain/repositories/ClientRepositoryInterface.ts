import { Client } from '../entities/client.entity';
export interface ClientRepository {
    findById(id: number): Promise<Client | null>;
    findAll(): Promise<Client[]>;
    save(client: Client): Promise<Client>;
    delete(id: number): Promise<void>;
}
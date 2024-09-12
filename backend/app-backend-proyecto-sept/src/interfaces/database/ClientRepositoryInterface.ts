import { Client } from '../../core/domain/entities/client.entity';
import { ClientRepository } from '../../core/domain/repositories/ClientRepositoryInterface';
export interface ClientRepositoryInterface extends ClientRepository {
    countAll(): Promise<number>;
    findByName(name: string): Promise<Client | null>;
    findByPhone(phone: string): Promise<Client | null>;
    findByAddress(address: string): Promise<Client | null>;
    findByCity(city: string): Promise<Client | null>;
}
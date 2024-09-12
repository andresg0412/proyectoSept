import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { ClientRepository } from '../../../core/domain/repositories/ClientRepositoryInterface';
import { Client } from '../../../core/domain/entities/client.entity';

@Injectable()
export class ClientRepositoryImpl implements ClientRepository {
    constructor(
        @InjectRepository(Client)
        private clientRepository: Repository<Client>,
    ) {}

    async findAll(): Promise<Client[]> {
        return this.clientRepository.find();
    }

    async findById(id: number): Promise<Client | null> {
        return this.clientRepository.findOneBy({ id });
    }

    async save(client: Client): Promise<Client> {
        return this.clientRepository.save(client);
    }

    async delete(id: number): Promise<void> {
        await this.clientRepository.delete(id);
    }

    countAll(): Promise<number> {
        return this.clientRepository.count();
    }

    async findByName(name: string): Promise<Client | null> {
        return this.clientRepository.findOneBy({ name });
    }

    async findByPhone(phone: string): Promise<Client | null> {
        return this.clientRepository.findOneBy({ phone });
    }
}
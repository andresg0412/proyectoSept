import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { DeliveryRepository } from '../../../core/domain/repositories/DeliveryRepositoryInterface';
import { Delivery } from '../../../core/domain/entities/delivery.entity';

@Injectable()
export class DeliveryRepositoryImpl implements DeliveryRepository {
    constructor(
        @InjectRepository(Delivery)
        private DeliveryRepository: Repository<Delivery>,
    ) {}

    async findAll(): Promise<Delivery[]> {
        return this.DeliveryRepository.find();
    }

    async findById(id: number): Promise<Delivery | null> {
        return this.DeliveryRepository.findOneBy({ id });
    }

    async save(Delivery: Delivery): Promise<Delivery> {
        return this.DeliveryRepository.save(Delivery);
    }

    async delete(id: number): Promise<void> {
        await this.DeliveryRepository.delete(id);
    }

}
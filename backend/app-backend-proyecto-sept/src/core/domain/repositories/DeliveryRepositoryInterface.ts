import { Delivery } from '../entities/delivery.entity';
export interface DeliveryRepository {
    findById(id: number): Promise<Delivery | null>;
    findAll(): Promise<Delivery[]>;
    save(delivery: Delivery): Promise<Delivery>;
    delete(id: number): Promise<void>;
}
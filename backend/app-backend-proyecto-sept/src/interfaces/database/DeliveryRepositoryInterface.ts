import { Delivery } from '../../core/domain/entities/delivery.entity';
import { DeliveryRepository } from '../../core/domain/repositories/DeliveryRepositoryInterface';
export interface DeliveryRepositoryInterface extends DeliveryRepository {
    countAll(): Promise<number>;
}
import { DeliveryRepositoryInterface } from '../../interfaces/database/DeliveryRepositoryInterface';
import { Delivery } from '../../core/domain/entities/Delivery.entity';
import { CreateDeliveryInput } from '../../interfaces/http/CreateDeliveryInput';
import { CreateDeliveryOutput } from '../../interfaces/http/CreateDeliveryOutput';

export interface DeliveryService {
    create(input: CreateDeliveryInput): Promise<CreateDeliveryOutput>;
    findAll(): Promise<Delivery[]>;
    findById(id: number): Promise<Delivery | undefined>;
    save(Delivery: Delivery): Promise<Delivery>;
    countAll(): Promise<number>;
}

export class DeliveryServiceImpl implements DeliveryService {
    constructor(private DeliveryRepository: DeliveryRepositoryInterface) { }

    create(input: CreateDeliveryInput): Promise<CreateDeliveryOutput> {
        const Delivery = new Delivery();
        Delivery.name = input.name;
        Delivery.price = input.price;
        Delivery.description = input.description;
        Delivery.stock = input.stock;

        return this.DeliveryRepository.save(Delivery).then(savedDelivery => ({
            DeliveryId: savedDelivery.id,
        }));
    }
    findAll(): Promise<Delivery[]> {
        return this.DeliveryRepository.findAll();
    }

    findById(id: number): Promise<Delivery | undefined> {
        return this.DeliveryRepository.findById(id);
    }

    save(Delivery: Delivery): Promise<Delivery> {
        return this.DeliveryRepository.save(Delivery);
    }


    countAll(): Promise<number> {
        return this.DeliveryRepository.countAll();
    }
}
import { Product } from '../../core/domain/entities/product.entity';
import { ProductRepository } from '../../core/domain/repositories/ProductRepositoryInterface';
export interface ProductRepositoryInterface extends ProductRepository {
    countAll(): Promise<number>;
}
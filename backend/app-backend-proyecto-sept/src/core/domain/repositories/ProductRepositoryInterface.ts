import { Product } from '../entities/product.entity';
export interface ProductRepository {
    findById(id: number): Promise<Product | null>;
    findAll(): Promise<Product[]>;
    save(product: Product): Promise<Product>;
    delete(id: number): Promise<void>;
    updateStock(productId: number, newStock: number): Promise<void>;
}
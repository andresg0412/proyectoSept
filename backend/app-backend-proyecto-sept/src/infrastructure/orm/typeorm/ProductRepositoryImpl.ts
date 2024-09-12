import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { ProductRepository } from '../../../core/domain/repositories/ProductRepositoryInterface';
import { Product } from '../../../core/domain/entities/product.entity';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
    constructor(
        @InjectRepository(Product)
        private ProductRepository: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        return this.ProductRepository.find();
    }

    async findById(id: number): Promise<Product | null> {
        return this.ProductRepository.findOneBy({ id });
    }

    async save(Product: Product): Promise<Product> {
        return this.ProductRepository.save(Product);
    }

    async delete(id: number): Promise<void> {
        await this.ProductRepository.delete(id);
    }

    async updateStock(productId: number, newStock: number): Promise<void> {
        const product = await this.ProductRepository.findOneBy({ id: productId });
        if (product) {
            product.stock = newStock;
            await this.ProductRepository.save(product);
        }
    }

}
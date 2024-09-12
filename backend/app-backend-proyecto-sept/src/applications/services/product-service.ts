import { ProductRepositoryInterface } from '../../interfaces/database/ProductRepositoryInterface';
import { Product } from '../../core/domain/entities/Product.entity';
import { CreateProductInput } from '../../interfaces/http/CreateProductInput';
import { CreateProductOutput } from '../../interfaces/http/CreateProductOutput';

export interface ProductService {
    create(input: CreateProductInput): Promise<CreateProductOutput>;
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product | undefined>;
    save(Product: Product): Promise<Product>;
    countAll(): Promise<number>;
}

export class ProductServiceImpl implements ProductService {
    constructor(private ProductRepository: ProductRepositoryInterface) { }

    create(input: CreateProductInput): Promise<CreateProductOutput> {
        const product = new Product();
        product.name = input.name;
        product.price = input.price;
        product.description = input.description;
        product.stock = input.stock;

        return this.ProductRepository.save(product).then(savedProduct => ({
            productId: savedProduct.id,
        }));
    }
    findAll(): Promise<Product[]> {
        return this.ProductRepository.findAll();
    }

    findById(id: number): Promise<Product | undefined> {
        return this.ProductRepository.findById(id);
    }

    save(Product: Product): Promise<Product> {
        return this.ProductRepository.save(Product);
    }


    countAll(): Promise<number> {
        return this.ProductRepository.countAll();
    }
}
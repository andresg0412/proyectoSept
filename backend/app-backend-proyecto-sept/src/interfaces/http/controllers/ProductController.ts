import { Controller } from '@nestjs/common';
import { ProductService } from '../../../applications/services/product-service';
import { CreateProductInput } from '../CreateProductInput';
import { CreateProductOutput } from '../CreateProductOutput';
import { GetAllProductsOutput } from '../GetAllProductsOutput';
import { Product } from '../../../core/domain/entities/product.entity';
import { NotFoundError } from '../../errors';
interface CreateProductDto {
    name: string;
    price: number;
    description: string;
    stock: number;
}

interface FindProductByIdDto {
    id: number;
}

interface FindProductByIdOutput {
    Product: Product;
}

interface GetProductsDto {
    page: number;
    limit: number;
}


@Controller('Products')
export class ProductController {
    constructor(private ProductService: ProductService) { }

    async create(createProductDto: CreateProductDto): Promise<CreateProductOutput> {
        return await this.ProductService.create(createProductDto);
    }

    async findAll(getProductsDto: GetProductsDto): Promise<GetAllProductsOutput> {
        const Products = await this.ProductService.findAll();
        return { Products };
    }

    async findById(findProductByIdDto: FindProductByIdDto): Promise<FindProductByIdOutput | NotFoundError> {
        try {
            const Product = await this.ProductService.findById(findProductByIdDto.id);
            if (!Product) throw new NotFoundError('Producte no encontrado');
            return { Product };
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new Error('Ocurrió un error al buscar el Producte');
        }
    }
}
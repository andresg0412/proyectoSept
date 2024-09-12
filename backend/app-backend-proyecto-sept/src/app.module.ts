import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Product } from './core/domain/entities/product.entity';
import { Client } from './core/domain/entities/client.entity';
import { Transaction } from './core/domain/entities/transaction.entity';
import { Delivery } from './core/domain/entities/delivery.entity';
//import { ProductController } from './interfaces/http/controllers/producto.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([Client, Transaction, Delivery, Product]),
  ],
})
export class AppModule {}

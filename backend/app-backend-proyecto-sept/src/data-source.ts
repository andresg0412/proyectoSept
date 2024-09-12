import { DataSource } from 'typeorm';
import { Client } from './core/domain/entities/client.entity';
import { Transaction } from './core/domain/entities/transaction.entity';
import { Delivery } from './core/domain/entities/delivery.entity';
import { Product } from './core/domain/entities/product.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'pruebanodejs',
    entities: [Client, Transaction, Delivery, Product],
    synchronize: false, //false en produccion
    logging: true,
});

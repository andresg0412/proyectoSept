import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, CreateDateColumn } from 'typeorm';
import { UpdateDateColumn, JoinColumn } from 'typeorm';
import { Transaction } from './transaction.entity';
import { Client } from './client.entity';
import { Product } from './product.entity';

@Entity('deliverys')
export class Delivery {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Transaction, (transaction) => transaction.delivery)
    @JoinColumn()
    transaction: Transaction;

    @ManyToOne(() => Client, (client) => client.delivery)
    client: Client;

    @ManyToOne(() => Product, (product) => product.delivery)
    product: Product;
}
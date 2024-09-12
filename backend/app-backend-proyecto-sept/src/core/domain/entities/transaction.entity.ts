import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm';
import { Product } from './product.entity';
import { Client } from './client.entity';
import { Delivery } from './delivery.entity';

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: string;

    @Column()
    result: string;

    @Column()
    value: number;

    @Column()
    methodofpayment: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Product, (product) => product.transaction, { onDelete: 'CASCADE' })
    product: Product;

    @ManyToOne(() => Client, (client) => client.transaction, { onDelete: 'CASCADE' })
    client: Client;

    @OneToOne(() => Delivery, (delivery) => delivery.transaction, { onDelete: 'CASCADE' })
    delivery: Delivery;
}
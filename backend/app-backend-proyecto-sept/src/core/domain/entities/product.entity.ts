import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Transaction } from './transaction.entity';
import { Delivery } from './delivery.entity';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    description: string;

    @Column('int')
    stock: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Transaction, (transaction) => transaction.product)
    transaction: Transaction[];

    @OneToMany(() => Delivery, (delivery) => delivery.product)
    delivery: Delivery[];
}
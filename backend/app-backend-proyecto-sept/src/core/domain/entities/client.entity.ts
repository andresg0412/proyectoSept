import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Transaction } from './transaction.entity';
import { Delivery } from './delivery.entity';

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Transaction, (transaction) => transaction.client)
    transaction: Transaction[]

    @OneToMany(() => Delivery, (delivery) => delivery.client)
    delivery: Delivery[]
}
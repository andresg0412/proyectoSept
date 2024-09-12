import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { TransactionRepository } from '../../../core/domain/repositories/TransactionRepositoryInterface';
import { Transaction } from '../../../core/domain/entities/transaction.entity';

@Injectable()
export class TransactionRepositoryImpl implements TransactionRepository {
    constructor(
        @InjectRepository(Transaction)
        private TransactionRepository: Repository<Transaction>,
    ) {}

    async findAll(): Promise<Transaction[]> {
        return this.TransactionRepository.find();
    }

    async findById(id: number): Promise<Transaction | null> {
        return this.TransactionRepository.findOneBy({ id });
    }

    async save(Transaction: Transaction): Promise<Transaction> {
        return this.TransactionRepository.save(Transaction);
    }

    async updateStatus(transactionId: number, newStatus: string): Promise<void> {
        const transaction = await this.TransactionRepository.findOneBy({ id: transactionId });
        if (transaction) {
            transaction.state = newStatus;
            await this.TransactionRepository.save(transaction);
        }
    }
}
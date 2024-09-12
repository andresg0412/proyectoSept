import { Transaction } from '../../core/domain/entities/transaction.entity';
import { TransactionRepository } from '../../core/domain/repositories/TransactionRepositoryInterface';
export interface TransactionRepositoryInterface extends TransactionRepository {
    countAll(): Promise<number>;
}
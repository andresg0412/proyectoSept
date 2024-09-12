import { Transaction } from '../entities/transaction.entity';
export interface TransactionRepository {
    findById(id: number): Promise<Transaction | null>;
    findAll(): Promise<Transaction[]>;
    save(transaction: Transaction): Promise<Transaction>;
    updateStatus(transactionId: number, newStatus: string): Promise<void>;
}
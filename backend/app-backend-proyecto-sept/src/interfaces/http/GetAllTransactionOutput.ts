import { Transaction } from '../../core/domain/entities/transaction.entity';
export interface GetAllTransactionsOutput {
    Transactions: Transaction[];
}

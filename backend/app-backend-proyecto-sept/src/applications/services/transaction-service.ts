import { TransactionRepositoryInterface } from '../../interfaces/database/TransactionRepositoryInterface';
import { Transaction } from '../../core/domain/entities/Transaction.entity';
import { CreateTransactionInput } from '../../interfaces/http/CreateTransactionInput';
import { CreateTransactionOutput } from '../../interfaces/http/CreateTransactionOutput';

export interface TransactionService {
    create(input: CreateTransactionInput): Promise<CreateTransactionOutput>;
    findAll(): Promise<Transaction[]>;
    findById(id: number): Promise<Transaction | undefined>;
    save(Transaction: Transaction): Promise<Transaction>;
    update(id: number, transaction: Partial<Transaction>): Promise<Transaction | null>;
}

export class TransactionServiceImpl implements TransactionService {
    constructor(private TransactionRepository: TransactionRepositoryInterface) { }

    create(input: CreateTransactionInput): Promise<CreateTransactionOutput> {
        const transaction = new Transaction();
        transaction.state = input.state;
        transaction.result = input.result;
        transaction.value = input.value;
        transaction.methodofpayment = input.methodofpayment;

        return this.TransactionRepository.save(transaction).then(savedTransaction => ({
            TransactionId: savedTransaction.id,
        }));
    }
    findAll(): Promise<Transaction[]> {
        return this.TransactionRepository.findAll();
    }

    findById(id: number): Promise<Transaction | undefined> {
        return this.TransactionRepository.findById(id);
    }

    save(Transaction: Transaction): Promise<Transaction> {
        return this.TransactionRepository.save(Transaction);
    }

    update(id: number, transaction: Partial<Transaction>): Promise<Transaction | null> {
        return this.findById(id).then(existingTransaction => {
            if (!existingTransaction) return null;

            Object.assign(existingTransaction, transaction);

            return this.save(existingTransaction);
        });
    }

}
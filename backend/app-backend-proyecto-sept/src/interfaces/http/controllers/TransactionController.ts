import { Controller } from '@nestjs/common';
import { TransactionService } from '../../../applications/services/transaction-service';
import { CreateTransactionInput } from '../CreateTransactionInput';
import { CreateTransactionOutput } from '../CreateTransactionOutput';
import { GetAllTransactionsOutput } from '../GetAllTransactionOutput';
import { Transaction } from '../../../core/domain/entities/Transaction.entity';
import { NotFoundError } from '../../errors';
interface CreateTransactionDto {
    state: string;
    result: string;
    value: number;
    methodofpayment: string;
}

interface GetTransactionsDto {
    page: number;
    limit: number;
}

interface FindTransactionByIdDto {
    id: number;
}

interface FindTransactionByIdOutput {
    Transaction: Transaction;
}

interface UpdateTransactionOutput {
    Transaction: Transaction;
}

interface UpdateTransactionDto {
    id: number;
    name?: string;
    email?: string;
    phone?: string;
    status?: 'PENDING' | 'APPROVED' | 'REJECTED';
}


interface CountTransactionsDto { }


@Controller('Transactions')
export class TransactionController {
    constructor(private TransactionService: TransactionService) { }

    async create(createTransactionDto: CreateTransactionDto): Promise<CreateTransactionOutput> {
        return await this.TransactionService.create(createTransactionDto);
    }

    async findAll(getTransactionsDto: GetTransactionsDto): Promise<GetAllTransactionsOutput> {
        const Transactions = await this.TransactionService.findAll();
        return { Transactions };
    }

    async findById(findTransactionByIdDto: FindTransactionByIdDto): Promise<FindTransactionByIdOutput | NotFoundError> {
        try {
            const Transaction = await this.TransactionService.findById(findTransactionByIdDto.id);
            if (!Transaction) throw new NotFoundError('Transactione no encontrado');
            return { Transaction };
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new Error('Ocurrió un error al buscar el Transactione');
        }
    }

    async update(updateTransactionDto: UpdateTransactionDto): Promise<UpdateTransactionOutput | NotFoundError> {
        try {
            const updatedTransaction = await this.TransactionService.update(updateTransactionDto.id, updateTransactionDto);
            if (!updatedTransaction) throw new NotFoundError('Transactione no encontrado');
            return { Transaction: updatedTransaction };
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new Error('Ocurrió un error al actualizar el Transactione');
        }
    }

}
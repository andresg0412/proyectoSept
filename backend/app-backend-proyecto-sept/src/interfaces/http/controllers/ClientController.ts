import { Controller } from '@nestjs/common';
import { ClientService } from '../../../applications/services/client-service';
import { CreateClientInput } from '../CreateClientInput';
import { CreateClientOutput } from '../CreateClientOutput';
import { GetAllClientsOutput } from '../GetAllClientsOutput';
import { Client } from '../../../core/domain/entities/client.entity';
import { NotFoundError } from '../../errors';
interface CreateClientDto {
    name: string;
    email: string;
    phone: string;
}

interface GetClientsDto {
    page: number;
    limit: number;
}

interface FindClientByIdDto {
    id: number;
}

interface FindClientByIdOutput {
    client: Client;
}

interface UpdateClientOutput {
    client: Client;
}

interface UpdateClientDto {
    id: number;
    name?: string;
    email?: string;
    phone?: string;
    status?: 'ACTIVE' | 'INACTIVE';
}

interface DeleteClientDto {
    id: number;
}

interface CountClientsDto { }

interface FindClientByNameDto {
    name: string;
}

interface FindClientByEmailDto {
    email: string;
}

interface UpdateClientStatusDto {
    id: number;
    status: 'ACTIVE' | 'INACTIVE';
}

@Controller('clients')
export class ClientController {
    constructor(private clientService: ClientService) { }

    async create(createClientDto: CreateClientDto): Promise<CreateClientOutput> {
        return await this.clientService.create(createClientDto);
    }

    async findAll(getClientsDto: GetClientsDto): Promise<GetAllClientsOutput> {
        const clients = await this.clientService.findAll();
        return { clients };
    }

    async findById(findClientByIdDto: FindClientByIdDto): Promise<FindClientByIdOutput | NotFoundError> {
        try {
            const client = await this.clientService.findById(findClientByIdDto.id);
            if (!client) throw new NotFoundError('Cliente no encontrado');
            return { client };
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new Error('Ocurrió un error al buscar el cliente');
        }
    }

    async update(updateClientDto: UpdateClientDto): Promise<UpdateClientOutput | NotFoundError> {
        try {
            const updatedClient = await this.clientService.update(updateClientDto.id, updateClientDto);
            if (!updatedClient) throw new NotFoundError('Cliente no encontrado');
            return { client: updatedClient };
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new Error('Ocurrió un error al actualizar el cliente');
        }
    }

    async delete(deleteClientDto: DeleteClientDto): Promise<void> {
        await this.clientService.delete(deleteClientDto.id);
    }

    async count(countClientsDto: CountClientsDto): Promise<number> {
        return this.clientService.countAll();
    }
}
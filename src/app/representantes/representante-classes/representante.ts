import { Endereco } from '../../enderecos/endereco/endereco';
import { ClienteResumoRefinado } from '../../clientes/cliente-classes/cliente-resumo-refinado';
import { PedidoResumoRefinado } from 'src/app/pedidos/pedido-classes/pedido-resumo-refinado';

export interface Representante{

    id: number;
    nome: string;
    cpf: string;
    rg: string;
    email: string;
    dataEntrada: Date;
    razaoSocial: string;
    cnpj: string;
    telefone: string;
    endereco: Endereco;
    clientes: ClienteResumoRefinado[];
    pedidos: PedidoResumoRefinado[];
    
}




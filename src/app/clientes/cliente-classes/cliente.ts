import { Endereco } from '../../enderecos/endereco/endereco';
import { RepresentanteResumo } from '../../representantes/representante-classes/representante-resumo';
import { PedidoResumoRefinado } from 'src/app/pedidos/pedido-classes/pedido-resumo-refinado';

export interface Cliente{

    id: number;
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    pessoaContato: Date;
    email: string;
    telefone: string;
    endereco: Endereco;
    representante: RepresentanteResumo;
    pedidos: PedidoResumoRefinado[];
    
}




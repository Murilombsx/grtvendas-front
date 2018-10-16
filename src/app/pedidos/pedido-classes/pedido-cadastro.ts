import { RepresentanteResumoId } from '../../representantes/representante-classes/representante-resumo-id';
import { ClienteResumoId } from 'src/app/clientes/cliente-classes/cliente-resumo-id';

export interface PedidoCadastro{

    qtdePecas: number;
    valorTotal: number;
    observacao: string;
    cliente: ClienteResumoId;
    representante: RepresentanteResumoId;
    
}




import { RepresentanteResumo } from '../../representantes/representante-classes/representante-resumo';
import { ClienteResumoEndereco } from 'src/app/clientes/cliente-classes/cliente-resumo-endereco';

export interface Pedido{

    id: number;
    numero: number;
    qtdePecas: number;
    valorTotal: number;
    observacao: string;
    cliente: ClienteResumoEndereco;
    representante: RepresentanteResumo;
    
}




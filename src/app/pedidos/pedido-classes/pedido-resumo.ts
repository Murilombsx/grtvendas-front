import { RepresentanteResumo } from '../../representantes/representante-classes/representante-resumo';
import { ClienteResumoRefinado } from 'src/app/clientes/cliente-classes/cliente-resumo-refinado';

export interface PedidoResumo{

    id: number;
    numero: string;
    cliente: ClienteResumoRefinado;
    representante: RepresentanteResumo;

}
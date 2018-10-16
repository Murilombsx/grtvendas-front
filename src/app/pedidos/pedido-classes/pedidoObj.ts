import { Endereco } from '../../enderecos/endereco/endereco';
import { RepresentanteResumoId } from '../../representantes/representante-classes/representante-resumo-id';
import { ClienteResumoId } from 'src/app/clientes/cliente-classes/cliente-resumo-id';

export function PedidoObj(qtdePecas: number, valorTotal: number, observacao: string, cliente: ClienteResumoId, representante: RepresentanteResumoId){

    var qtdePecas: number;
    var valorTotal: number;
    var observacao: string;
    var cliente: ClienteResumoId;
    var representante: RepresentanteResumoId;

    this.qtdePecas = qtdePecas;
    this.valorTotal = valorTotal;
    this.observacao = observacao;
    this.cliente = cliente;
    this.representante = representante;
    
}




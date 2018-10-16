import { Endereco } from '../../enderecos/endereco/endereco';
import { RepresentanteResumoId } from '../../representantes/representante-classes/representante-resumo-id';

export function PedidoObjEditavel(id: number, qtdePecas: number, valorTotal: number, observacao: string){

    var id: number;
    var qtdePecas: number;
    var valorTotal: number;
    var observacao: string;

    this.id = id;
    this.qtdePecas = qtdePecas;
    this.valorTotal = valorTotal;
    this.observacao = observacao;
    
}




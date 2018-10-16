import { Pipe, PipeTransform } from '@angular/core';
import { PedidoResumo } from '../../pedido-classes/pedido-resumo';

@Pipe({ name: 'filterPedido' })
export class filterPedido implements PipeTransform{

    transform(pedidos: PedidoResumo[], array: any[]) {
        var query;
        var tipo;
        query = array[0].trim().toLowerCase();
        tipo = array[1].trim().toLowerCase();
        
        if(query){
            if(tipo == 'número'){
                return pedidos.filter(pedido =>
                    pedido.numero.toLowerCase().includes(query));
            } else if (tipo == 'nome fantasia') {
                return pedidos.filter(pedido =>
                    pedido.cliente.nomeFantasia.toLowerCase().includes(query));
            } else if (tipo == 'cnpj') {
                return pedidos.filter(pedido =>
                    pedido.cliente.cnpj.toLowerCase().includes(query));
            } else if (tipo == 'representante') {
                return pedidos.filter(pedido =>
                    pedido.representante.nome.toLowerCase().includes(query));
            } else if (tipo == 'cidade') {
                return pedidos.filter(pedido =>
                    pedido.representante.endereco.estado.toLowerCase().includes(query));
            } else if (tipo == 'estado') {
                return pedidos.filter(pedido =>
                    pedido.representante.endereco.estado.toLowerCase().includes(query));
            } 
        } else {
            return pedidos;
        }
    }
}
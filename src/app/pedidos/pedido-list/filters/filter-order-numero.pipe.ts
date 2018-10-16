import { Pipe, PipeTransform } from '@angular/core';
import { PedidoResumo } from '../../pedido-classes/pedido-resumo';

@Pipe({ name: 'filterOrderNumero' })
export class filterOrderNumero implements PipeTransform{

    transform(pedidos: PedidoResumo[], optNumero: boolean) {
        
        if(optNumero){
            pedidos.sort((pd1: PedidoResumo, pd2: PedidoResumo) => {
                if(pd1.numero.trim().toLowerCase() < pd2.numero.trim().toLowerCase()){
                    return -1;
                } else if(pd1.numero.trim().toLowerCase() > pd2.numero.trim().toLowerCase()){
                    return 1;
                } else {
                    return 0;
                }
            });
            return pedidos;
        } else {
            return pedidos;
        }
    }
}
import { Pipe, PipeTransform } from '@angular/core';
import { PedidoResumo } from '../../pedido-classes/pedido-resumo';

@Pipe({ name: 'filterOrderEstado' })
export class filterOrderEstado implements PipeTransform{

    transform(pedidos: PedidoResumo[], optNumero: boolean) {
        
        if(optNumero){
            pedidos.sort((pd1: PedidoResumo, pd2:PedidoResumo) => {
                if(pd1.representante.endereco.estado.trim().toLowerCase() < pd2.representante.endereco.estado.trim().toLowerCase()){
                    return -1;
                } else if(pd1.representante.endereco.estado.trim().toLowerCase() > pd2.representante.endereco.estado.trim().toLowerCase()){
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
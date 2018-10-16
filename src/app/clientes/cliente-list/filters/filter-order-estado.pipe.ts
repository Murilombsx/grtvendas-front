import { Pipe, PipeTransform } from '@angular/core';
import { ClienteResumo } from '../../cliente-classes/cliente-resumo';

@Pipe({ name: 'filterOrderEstado' })
export class filterOrderEstado implements PipeTransform{

    transform(clientes: ClienteResumo[], optEstado: boolean) {
        
        if(optEstado){
            clientes.sort((clt1: ClienteResumo, clt2:ClienteResumo) => {
                if(clt1.representante.endereco.estado.trim().toLowerCase() < clt2.representante.endereco.estado.trim().toLowerCase()){
                    return -1;
                } else if(clt1.representante.endereco.estado.trim().toLowerCase() > clt2.representante.endereco.estado.trim().toLowerCase()){
                    return 1;
                } else {
                    return 0;
                }
            });
            return clientes;
        } else {
            return clientes;
        }
    }
}
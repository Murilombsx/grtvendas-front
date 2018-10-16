import { Pipe, PipeTransform } from '@angular/core';
import { ClienteResumo } from '../../cliente-classes/cliente-resumo';

@Pipe({ name: 'filterOrderNomeFantasia' })
export class filterOrderNomeFantasia implements PipeTransform{

    transform(clientes: ClienteResumo[], optNomeFantasia: boolean) {
        
        if(optNomeFantasia){
            clientes.sort((clt1: ClienteResumo, clt2:ClienteResumo) => {
                if(clt1.nomeFantasia.trim().toLowerCase() < clt2.nomeFantasia.trim().toLowerCase()){
                    return -1;
                } else if(clt1.nomeFantasia.trim().toLowerCase() > clt2.nomeFantasia.trim().toLowerCase()){
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
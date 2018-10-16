import { Pipe, PipeTransform } from '@angular/core';
import { ClienteResumo } from '../../cliente-classes/cliente-resumo';

@Pipe({ name: 'filterOrderRazaoSocial' })
export class filterOrderRazaoSocial implements PipeTransform{

    transform(clientes: ClienteResumo[], optRazaoSocial: boolean) {
        
        if(optRazaoSocial){
            clientes.sort((clt1: ClienteResumo, clt2:ClienteResumo) => {
                if(clt1.razaoSocial.trim().toLowerCase() < clt2.razaoSocial.trim().toLowerCase()){
                    return -1;
                } else if(clt1.razaoSocial.trim().toLowerCase() > clt2.razaoSocial.trim().toLowerCase()){
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
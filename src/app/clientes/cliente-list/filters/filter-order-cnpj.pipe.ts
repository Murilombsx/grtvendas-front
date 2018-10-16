import { Pipe, PipeTransform } from '@angular/core';
import { ClienteResumo } from '../../cliente-classes/cliente-resumo';

@Pipe({ name: 'filterOrderCNPJ' })
export class filterOrderCNPJ implements PipeTransform{

    transform(clientes: ClienteResumo[], optCNPJ: boolean) {
        
        if(optCNPJ){
            clientes.sort((clt1: ClienteResumo, clt2:ClienteResumo) => {
                if(clt1.cnpj.trim().toLowerCase() < clt2.cnpj.trim().toLowerCase()){
                    return -1;
                } else if(clt1.cnpj.trim().toLowerCase() > clt2.cnpj.trim().toLowerCase()){
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
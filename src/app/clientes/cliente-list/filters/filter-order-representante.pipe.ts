import { Pipe, PipeTransform } from '@angular/core';
import { ClienteResumo } from '../../cliente-classes/cliente-resumo';

@Pipe({ name: 'filterOrderRepresentante' })
export class filterOrderRepresentante implements PipeTransform{

    transform(clientes: ClienteResumo[], optRepresentante: boolean) {
        
        if(optRepresentante){
            clientes.sort((clt1: ClienteResumo, clt2:ClienteResumo) => {
                if(clt1.representante.nome.trim().toLowerCase() < clt2.representante.nome.trim().toLowerCase()){
                    return -1;
                } else if(clt1.representante.nome.trim().toLowerCase() > clt2.representante.nome.trim().toLowerCase()){
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
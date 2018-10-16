import { Pipe, PipeTransform } from '@angular/core';
import { ClienteResumo } from '../../cliente-classes/cliente-resumo';

@Pipe({ name: 'filterCliente' })
export class filterCliente implements PipeTransform{

    transform(clientes: ClienteResumo[], array: any[]) {
        var query;
        var tipo;
        query = array[0].trim().toLowerCase();
        tipo = array[1].trim().toLowerCase();
        
        if(query){
            if(tipo == 'nome fantasia'){
                return clientes.filter(cliente =>
                    cliente.nomeFantasia.toLowerCase().includes(query));
            } else if (tipo == 'razão social') {
                return clientes.filter(cliente =>
                    cliente.razaoSocial.toLowerCase().includes(query));
            } else if (tipo == 'cnpj') {
                return clientes.filter(cliente =>
                    cliente.cnpj.toLowerCase().includes(query));
            } else if (tipo == 'representante') {
                return clientes.filter(cliente =>
                    cliente.representante.nome.toLowerCase().includes(query));
            } else if (tipo == 'estado') {
                return clientes.filter(cliente =>
                    cliente.representante.endereco.estado.toLowerCase().includes(query));
            } 
        } else {
            return clientes;
        }
    }
}
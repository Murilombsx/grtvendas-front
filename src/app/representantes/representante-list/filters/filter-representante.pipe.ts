import { Pipe, PipeTransform } from '@angular/core';
import { RepresentanteResumo } from '../../representante-classes/representante-resumo';

@Pipe({ name: 'filterRepresentante' })
export class filterRepresentante implements PipeTransform{

    transform(representantes: RepresentanteResumo[], array: any[]) {
        var query;
        var tipo;
        query = array[0].trim().toLowerCase();
        tipo = array[1].trim().toLowerCase();
        
        if(query){
            if(tipo == 'nome'){
                return representantes.filter(representante =>
                    representante.nome.toLowerCase().includes(query));
            } else if (tipo == 'estado') {
                return representantes.filter(representante =>
                    representante.endereco.estado.toLowerCase().includes(query));
            } 
        } else {
            return representantes;
        }
    }
}
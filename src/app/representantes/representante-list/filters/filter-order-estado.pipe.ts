import { Pipe, PipeTransform } from '@angular/core';
import { RepresentanteResumo } from '../../representante-classes/representante-resumo';

@Pipe({ name: 'filterOrderEstado' })
export class filterOrderEstado implements PipeTransform{

    transform(representantes: RepresentanteResumo[], optEstado: boolean) {
        
       if(optEstado){
            representantes.sort((rep1: RepresentanteResumo, rep2:RepresentanteResumo) => {
                if(rep1.endereco.estado.trim().toLowerCase() < rep2.endereco.estado.trim().toLowerCase()){
                    return -1;
                } else if(rep1.endereco.estado.trim().toLowerCase() > rep2.endereco.estado.trim().toLowerCase()){
                    return 1;
                } else {
                    return 0;
                }
            });
            return representantes;
        } else {
            return representantes;
        }
    }
}
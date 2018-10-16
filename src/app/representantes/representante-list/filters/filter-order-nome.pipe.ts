import { Pipe, PipeTransform } from '@angular/core';
import { RepresentanteResumo } from '../../representante-classes/representante-resumo';

@Pipe({ name: 'filterOrderNome' })
export class filterOrderNome implements PipeTransform{

    transform(representantes: RepresentanteResumo[], optNome: boolean) {
        
        if(optNome){
            representantes.sort((rep1: RepresentanteResumo, rep2:RepresentanteResumo) => {
                if(rep1.nome.trim().toLowerCase() < rep2.nome.trim().toLowerCase()){
                    return -1;
                } else if(rep1.nome.trim().toLowerCase() > rep2.nome.trim().toLowerCase()){
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
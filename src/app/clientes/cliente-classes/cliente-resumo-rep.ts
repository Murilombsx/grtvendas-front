import { RepresentanteResumo } from 'src/app/representantes/representante-classes/representante-resumo';

export interface ClienteResumoRep{

    id: number;
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    representante: RepresentanteResumo;

}
import { EnderecoResumoCidade } from '../../enderecos/endereco-resumo/endereco-resumo-cidade';
import { RepresentanteResumo } from '../../representantes/representante-classes/representante-resumo';

export interface ClienteResumo{

    id: number;
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    representante: RepresentanteResumo;

}
import { Endereco } from '../../enderecos/endereco/endereco';
import { RepresentanteResumoId } from '../../representantes/representante-classes/representante-resumo-id';

export interface ClienteCadastro{

    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    pessoaContato: string;
    email: string;
    telefone: string;
    endereco: Endereco;
    representante: RepresentanteResumoId;
    
}




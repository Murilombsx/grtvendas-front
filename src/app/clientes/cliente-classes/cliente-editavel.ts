import { Endereco } from '../../enderecos/endereco/endereco';
import { RepresentanteResumo } from '../../representantes/representante-classes/representante-resumo';

export interface ClienteEditavel{

    id: number;
    nomeFantasia: string;
    pessoaContato: string;
    email: string;
    telefone: string;
    endereco: Endereco;
    representante: RepresentanteResumo;
    
}




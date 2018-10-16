import { Endereco } from '../../enderecos/endereco/endereco';

export interface RepresentanteEditavel{

    id: number;
    email: string;
    telefone: string;
    endereco: Endereco;
    
}




import { EnderecoResumoCidade } from '../../enderecos/endereco-resumo/endereco-resumo-cidade';
import { Endereco } from 'src/app/enderecos/endereco/endereco';

export interface ClienteResumoEndereco{

    id: number;
    nomeFantasia: string;
    cnpj: string;
    endereco: Endereco;

}
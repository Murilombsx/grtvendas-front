import { EnderecoResumoCidade } from '../../enderecos/endereco-resumo/endereco-resumo-cidade';

export interface ClienteResumoRefinado{

    id: number;
    nomeFantasia: string;
    cnpj: string;
    endereco: EnderecoResumoCidade;

}
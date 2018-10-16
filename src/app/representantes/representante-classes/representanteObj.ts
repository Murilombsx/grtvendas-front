import { Endereco } from '../../enderecos/endereco/endereco';

export function RepresentanteObj(nome: string, cpf: string, rg: string, email: string, razaoSocial: string, cnpj: string, telefone: string, endereco: Endereco){

    var nome: string;
    var cpf: string;
    var rg: string;
    var email: string;
    var razaoSocial: string;
    var cnpj: string;
    var telefone: string;
    var endereco: Endereco;

    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.email = email;
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
    this.telefone = telefone;
    this.endereco = endereco;
    
}




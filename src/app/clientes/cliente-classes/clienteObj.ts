import { Endereco } from '../../enderecos/endereco/endereco';
import { RepresentanteResumoId } from '../../representantes/representante-classes/representante-resumo-id';

export function ClienteObj(nomeFantasia: string, razaoSocial: string, cnpj: string, inscricaoEstadual:string, pessoaContato: string, email: string, telefone: string, endereco: Endereco, representante: RepresentanteResumoId){

    var nomeFantasia: string;
    var razaoSocial: string;
    var cnpj: string;
    var inscricaoEstadual: string;
    var pessoaContato: string;
    var email: string;
    var telefone: string;
    var endereco: Endereco;
    var representante: RepresentanteResumoId;

    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
    this.inscricaoEstadual = inscricaoEstadual;
    this.pessoaContato = pessoaContato;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.representante = representante;
    
}




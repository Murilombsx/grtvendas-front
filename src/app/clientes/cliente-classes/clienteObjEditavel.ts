import { Endereco } from '../../enderecos/endereco/endereco';
import { RepresentanteResumoId } from '../../representantes/representante-classes/representante-resumo-id';

export function ClienteObjEditavel(id: number, nomeFantasia: string, pessoaContato: string, email: string, telefone: string, endereco: Endereco, representante: RepresentanteResumoId){

    var id: number;
    var nomeFantasia: string;
    var pessoaContato: string;
    var email: string;
    var telefone: string;
    var endereco: Endereco;
    var representante: RepresentanteResumoId;

    this.id = id;
    this.nomeFantasia = nomeFantasia;
    this.pessoaContato = pessoaContato;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.representante = representante;
    
}




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteResumo } from '../cliente-classes/cliente-resumo';
import { Cliente } from '../cliente-classes/cliente';
import { ClienteEditavel } from '../cliente-classes/cliente-editavel';
import { ClienteCadastro } from '../cliente-classes/cliente-cadastro';
import { ClienteResumoRep } from '../cliente-classes/cliente-resumo-rep';

const API_URL = "https://grtvendas-springboot.herokuapp.com";

@Injectable({ providedIn: 'root' })
export class ClienteService{

    constructor(private http: HttpClient){}

    cadastrarCliente(cliente: ClienteCadastro){
        return this.http.post(API_URL + '/clientes/cadastrar', cliente);
    }

    editarCliente(cliente: ClienteEditavel){
        return this.http.post(API_URL + '/clientes/editar', cliente);
    }

    listaClientes(){
        return this.http
            .get<ClienteResumo[]>(API_URL + '/clientes/listar');
    }

    detalheCliente(id: number){
        return this.http.get<Cliente>(API_URL + '/clientes/detalhe/' + id);
    }

    deletaCliente(id: number){
        return this.http.post(API_URL + '/clientes/deletar', id);
    }

    buscaClientePorNome(nome: string){
        return this.http.get<ClienteResumoRep>(API_URL + '/clientes/buscar/' + nome);
    }

}
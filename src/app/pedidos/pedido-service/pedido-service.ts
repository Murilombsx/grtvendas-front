import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoResumo } from '../pedido-classes/pedido-resumo';
import { Pedido } from '../pedido-classes/pedido';
import { PedidoCadastro } from '../pedido-classes/pedido-cadastro';
import { PedidoEditavel } from '../pedido-classes/pedido-editavel';

const API_URL = "http://localhost:8080/grtvendas";

@Injectable({ providedIn: 'root' })
export class PedidoService{

    constructor(private http: HttpClient){}

    cadastrarPedido(pedido: PedidoCadastro){
        return this.http.post(API_URL + '/pedidos/cadastrar', pedido);
    }

    editarPedido(pedido: PedidoEditavel){
        return this.http.post(API_URL + '/pedidos/editar', pedido);
    }

    listaPedidos(){
        return this.http
            .get<PedidoResumo[]>(API_URL + '/pedidos/listar');
    }

    detalhePedido(id: number){
        return this.http.get<Pedido>(API_URL + '/pedidos/detalhe/' + id);
    }

    deletaPedido(id: number){
        return this.http.post(API_URL + '/pedidos/deletar', id);
    }
    

}
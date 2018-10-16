import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PedidoResumo } from '../pedido-classes/pedido-resumo';
import { PedidoService } from '../pedido-service/pedido-service';

@Component({
    selector: 'grt-pedido-list',
    templateUrl: './pedido-list.component.html'
})
export class PedidoListComponent implements OnInit {
    
    tipoForm: FormGroup;
    pedidos: PedidoResumo[] = [];
    filter: any = '';
    type: string = 'número';
    optNumero: boolean = false;
    optNomeFantasia: boolean = false;
    optCNPJ: boolean = false;
    optEstado: boolean = false;
    optCidade: boolean = false;
    optRepresentante: boolean = false;
  
    constructor(
        private formBuilder: FormBuilder,
        private pedidoService: PedidoService,
        private router: Router){}

    ngOnInit(): void {

        this.tipoForm = this.formBuilder.group({
        tipo: ['']
        });

        this.pedidoService
        .listaPedidos()
        .subscribe(pedidos => {
            this.pedidos = pedidos
        });
    }

    redirecionaCadastroPedido(){
        this.router.navigate(['pedidos/cadastrar'])
    }

    redirecionaDetalhePedido(id: number){
        this.router.navigate(['pedidos/detalhe/' + id])
    }

    alteraTipo(){
        const tipo = this.tipoForm.get('tipo').value;
        this.type = tipo;
    }

    orderNumero(){
        if(this.optNumero == true){
        this.optNumero = false;
        } else{
        this.optNumero = true;
        }
    }

    orderNomeFantasia(){
        if(this.optNomeFantasia == true){
        this.optNomeFantasia = false;
        } else{
        this.optNomeFantasia = true;
        }
    }

    orderEstado(){
        if(this.optEstado == true){
        this.optEstado = false;
        } else{
        this.optEstado = true;
        }
    }

    orderCidade(){
        if(this.optCidade == true){
        this.optCidade = false;
        } else{
        this.optCidade = true;
        }
    }

    orderCNPJ(){
        if(this.optCNPJ == true){
        this.optCNPJ = false;
        } else{
        this.optCNPJ = true;
        }
    }

    orderRepresentante(){
        if(this.optRepresentante == true){
        this.optRepresentante = false;
        } else{
        this.optRepresentante = true;
        }
    }
}
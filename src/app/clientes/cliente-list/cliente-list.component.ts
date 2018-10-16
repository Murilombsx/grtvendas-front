import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteResumo } from '../cliente-classes/cliente-resumo';
import { ClienteService } from '../cliente-service/cliente.service';
import { Router } from '@angular/router';

@Component({
    selector: 'grt-cliente-list',
    templateUrl: './cliente-list.component.html'
})
export class ClienteListComponent implements OnInit {
    
    tipoForm: FormGroup;
    clientes: ClienteResumo[] = [];
    filter: any = '';
    type: string = 'nome fantasia';
    optNomeFantasia: boolean = false;
    optEstado: boolean = false;
    optRazaoSocial: boolean = false;
    optCNPJ: boolean = false;
    optRepresentante: boolean = false;
  
    constructor(
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
        private router: Router){}

    ngOnInit(): void {

        this.tipoForm = this.formBuilder.group({
        tipo: ['']
        });

        this.clienteService
        .listaClientes()
        .subscribe(clientes => {
            this.clientes = clientes
        });
    }

    redirecionaCadastroCliente(){
        this.router.navigate(['clientes/cadastrar'])
    }

    redirecionaDetalheCliente(id: number){
        this.router.navigate(['clientes/detalhe/' + id])
    }

    alteraTipo(){
        const tipo = this.tipoForm.get('tipo').value;
        this.type = tipo;
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

    orderRazaoSocial(){
        if(this.optRazaoSocial == true){
        this.optRazaoSocial = false;
        } else{
        this.optRazaoSocial = true;
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
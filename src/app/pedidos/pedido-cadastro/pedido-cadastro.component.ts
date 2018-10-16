import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/alert/alert.service';
import { RepresentanteService } from '../../representantes/representante-service/representante.service';
import { RepresentanteResumo } from '../../representantes/representante-classes/representante-resumo';
import { PedidoService } from '../pedido-service/pedido-service';
import { ClienteResumo } from 'src/app/clientes/cliente-classes/cliente-resumo';
import { ClienteService } from 'src/app/clientes/cliente-service/cliente.service';
import { ClienteResumoRep } from 'src/app/clientes/cliente-classes/cliente-resumo-rep';
import { RepresentanteIdObjEditavel } from 'src/app/representantes/representante-classes/representanteIdObjEditavel';
import { ClienteIdObj } from 'src/app/clientes/cliente-classes/clienteIdObj';
import { PedidoObj } from '../pedido-classes/pedidoObj';

@Component({
    selector: 'grt-pedido-cadastro',
    templateUrl: './pedido-cadastro.component.html'
})
export class PedidoCadastroComponent implements OnInit {

    cadastroPedidoForm: FormGroup;
    representantes: RepresentanteResumo[] = [];
    clientes: ClienteResumo[] = [];
    novoCliente: ClienteResumoRep;

    constructor(
        private representanteService: RepresentanteService,
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
        private pedidoService: PedidoService,
        private router: Router,
        private alertService: AlertService) { }


    ngOnInit(): void {

        this.representanteService
            .listaRepresentantes()
            .subscribe(representantes => {
                this.representantes = representantes;
            });

        this.clienteService
            .listaClientes()
            .subscribe(clientes => {
                this.clientes = clientes
            });

        this.cadastroPedidoForm = this.formBuilder.group({
            qtdePecas: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
            valorTotal: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
            observacao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            cliente: ['', Validators.required],
        })
    }

    redirecionaListaPedidos() {
        this.router.navigate(['pedidos/listar'])
    }

    cadastrarPedido() {

        const qtdePecas = this.cadastroPedidoForm.get('qtdePecas').value;
        const valorTotal = this.cadastroPedidoForm.get('valorTotal').value;
        const observacao = this.cadastroPedidoForm.get('observacao').value;
        const nomeCliente: string = this.cadastroPedidoForm.get('cliente').value;

        this.clienteService
            .buscaClientePorNome(nomeCliente)
            .subscribe(cliente => {
                this.novoCliente = cliente;
                let idCliente: number;
                let idRepresentante: number;

                idCliente = this.novoCliente.id;
                idRepresentante = this.novoCliente.representante.id;

                var cl = new ClienteIdObj(idCliente);
                let rep = new RepresentanteIdObjEditavel(idRepresentante);
                var pedido = new PedidoObj(qtdePecas, valorTotal, observacao, cl, rep);

                this.pedidoService
                    .cadastrarPedido(pedido)
                    .subscribe(
                        () => {
                            this.alertService.succes('O pedido foi cadastrado com sucesso!', true);
                            this.router.navigate(['pedidos/listar/']);
                        },
                        err => {
                            this.alertService.warning('Não foi possível cadastrar o pedido.', true);
                        });
            });
        }

}

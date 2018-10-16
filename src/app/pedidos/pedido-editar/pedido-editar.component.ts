import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../shared/alert/alert.service';
import { Pedido } from '../pedido-classes/pedido';
import { PedidoService } from '../pedido-service/pedido-service';
import { PedidoObjEditavel } from '../pedido-classes/pedidoObjEditavel';

@Component({
    selector: 'grt-pedido-editar',
    templateUrl: './pedido-editar.component.html'
})
export class PedidoEditarComponent implements OnInit {

    editarPedidoForm: FormGroup;
    pedido: Pedido;
    idPedido: number;

    constructor(
        private pedidoService: PedidoService,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.idPedido = this.activatedRoute.snapshot.params.id;

        this.pedidoService
            .detalhePedido(this.idPedido)
            .subscribe(pedido => {
                this.pedido = pedido
            });

        this.editarPedidoForm = this.formBuilder.group({
            numero: [''],
            qtdePecas: ['', [Validators.minLength(2), Validators.maxLength(5)]],
            valorTotal: ['', [Validators.minLength(2), Validators.maxLength(10)]],
            observacao: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            cliente: [''],
            representante: ['']

        })
    }

    voltaPaginaAnterior() {
        this.router.navigate(['pedidos/detalhe/' + this.idPedido]);
    }

    editarPedido() {

        const qtdePecas = this.editarPedidoForm.get('qtdePecas').value;
        const valorTotal = this.editarPedidoForm.get('valorTotal').value;
        const observacao = this.editarPedidoForm.get('observacao').value;

        var pedido = new PedidoObjEditavel(this.idPedido, qtdePecas, valorTotal, observacao);
        this.pedidoService
            .editarPedido(pedido)
            .subscribe(
                () => {
                    this.alertService.succes('O pedido ' + this.idPedido + ' foi editado com sucesso!', true);
                    this.router.navigate(['pedidos/detalhe/' + this.idPedido]);
                },
                err => {
                    this.alertService.warning('Não foi possível editar o pedido ' + this.idPedido + '.', true);
                });
    }


}
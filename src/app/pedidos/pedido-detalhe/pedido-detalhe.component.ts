import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../shared/alert/alert.service';
import { Pedido } from '../pedido-classes/pedido';
import { PedidoService } from '../pedido-service/pedido-service';

@Component({
    selector: 'grt-pedido-detalhe',
    templateUrl: './pedido-detalhe.component.html'
})
export class PedidoDetalheComponent implements OnInit {

    pedido: Pedido;
    id: number;

    constructor(
        private pedidoService: PedidoService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;

        this.pedidoService
            .detalhePedido(this.id)
            .subscribe(pedido => {
                this.pedido = pedido
            });

    }

    redirecionaListaPedidos() {
        this.router.navigate(['pedidos/listar']);
    }

    redirecionaEditarPedido() {
        this.router.navigate(['pedidos/editar/' + this.id]);
    }

    deletaPedido() {
        this.pedidoService
            .deletaPedido(this.id)
            .subscribe(
                () => {
                    this.alertService.succes('O Pedido ' + this.pedido.numero + " foi removido com sucesso!", true);
                    this.router.navigate(['pedidos/listar']);
                },
                err => {
                    this.alertService.warning('Não foi possível deletar o pedido ' + this.pedido.numero + '.', true);
                });
    }
}
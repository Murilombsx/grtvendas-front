import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente-classes/cliente';
import { ClienteService } from '../cliente-service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../shared/alert/alert.service';

@Component({
    selector: 'grt-cliente-detalhe',
    templateUrl: './cliente-detalhe.component.html'
})
export class ClienteDetalheComponent implements OnInit {

    cliente: Cliente;
    id: number;

    constructor(
        private clienteService: ClienteService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;

        this.clienteService
            .detalheCliente(this.id)
            .subscribe(cliente => {
                this.cliente = cliente
            });

    }

    redirecionaListaClientes() {
        this.router.navigate(['clientes/listar']);
    }

    redirecionaEditarCliente() {
        this.router.navigate(['clientes/editar/' + this.id]);
    }

    deletaCliente() {
        if (this.cliente.pedidos.length != 0) {
            this.alertService.warning('Não é possível deletar este cliente, pois ele já tem um pedido associado a ele!', true)
        } else {
            this.clienteService
                .deletaCliente(this.id)
                .subscribe(
                    () => {
                        this.alertService.succes('O Cliente ' + this.cliente.nomeFantasia + " foi removido com sucesso!", true);
                        this.router.navigate(['clientes/listar']);
                    },
                    err => {
                        this.alertService.warning('Não foi possível deletar o cliente ' + this.cliente.nomeFantasia + '.', true);
                    });
        }
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Representante } from '../representante-classes/representante';
import { AlertService } from '../../shared/alert/alert.service';
import { RepresentanteService } from '../representante-service/representante.service';

@Component({
    selector: 'grt-representante-detalhe',
    templateUrl: './representante-detalhe.component.html'
})
export class RepresentanteDetalheComponent implements OnInit{
    
    representante: Representante;
    id: number;

    constructor(
        private representanteService: RepresentanteService, 
        private activatedRoute: ActivatedRoute, 
        private router: Router,
        private alertService: AlertService){}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;

        this.representanteService
            .detalheRepresentante(this.id)
            .subscribe(representante => {
                this.representante = representante
            });
       
    }

    redirecionaListaRepresentantes(){
        this.router.navigate(['representantes/listar']);
    }

    redirecionaEditarRepresentante(){
        this.router.navigate(['representantes/editar/' + this.id]);
    }

    deletaRepresetante(){
        if(this.representante.clientes.length != 0 || this.representante.pedidos.length != 0){
            this.alertService.warning('Não é possível deletar este representante, pois ele tem clientes ou pedidos associados a ele!', true)
        } else{
            this.representanteService
            .deletaRepresentante(this.id)
            .subscribe(
                () => {
                    this.alertService.succes('O Representante ' + this.representante.nome + " foi removido com sucesso!", true);
                    this.router.navigate(['representantes/listar']);
                },
                err => {
                    this.alertService.warning('Não foi possível deletar o representante ' + this.representante.nome + '.', true);
                });
        }

    }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RepresentanteService } from '../representante-service/representante.service';
import { Representante } from '../representante-classes/representante';
import { EnderecoObj } from '../../enderecos/endereco/enderecoObj';
import { RepresentanteObjEditavel } from '../representante-classes/representanteObjEditavel';
import { AlertService } from '../../shared/alert/alert.service';

@Component({
    selector: 'grt-representante-editar',
    templateUrl: './representante-editar.component.html'
})
export class RepresentanteEditarComponent implements OnInit{
    
    editarRepresentanteForm: FormGroup;
    representante: Representante;
    id: number;

    constructor(
        private representanteService: RepresentanteService, 
        private formBuilder: FormBuilder,
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

        this.editarRepresentanteForm = this.formBuilder.group({
            nome: [''],
            cpf: [''],
            rg: [''],
            email: ['', [Validators.required, Validators.email]],
            razaoSocial: [''],
            cnpj: [''],
            telefone: ['', [Validators.minLength(13), Validators.maxLength(14)]],
            rua: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            numero: ['', [Validators.minLength(1), Validators.maxLength(5)]],
            complemento: ['', Validators.maxLength(40)],
            bairro: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            cidade: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            estado: [''],
            cep: ['', [Validators.minLength(9), Validators.maxLength(9)]],

        })
    }

    voltaPaginaAnterior(){
        this.router.navigate(['representantes/detalhe/' + this.id]);
    }

    editarRepresentante(){

        const email = this.editarRepresentanteForm.get('email').value;
        const telefone = this.editarRepresentanteForm.get('telefone').value;
        const rua = this.editarRepresentanteForm.get('rua').value;
        const numero = this.editarRepresentanteForm.get('numero').value;
        const complemento = this.editarRepresentanteForm.get('complemento').value;
        const bairro = this.editarRepresentanteForm.get('bairro').value;
        const cidade = this.editarRepresentanteForm.get('cidade').value;
        const estado = this.editarRepresentanteForm.get('estado').value;
        const cep = this.editarRepresentanteForm.get('cep').value;
        
        var endereco = new EnderecoObj(rua,numero,complemento,bairro,cidade,estado,cep);
        var representante = new RepresentanteObjEditavel(this.id,email,telefone,endereco);

        this.representanteService
            .editarRepresentante(representante)
            .subscribe(
                () => {
                    this.alertService.succes('O Representante ' + this.representante.nome + ' foi editado com sucesso!', true);
                    this.router.navigate(['representantes/detalhe/' + this.id]);
                },
                err => {
                    this.alertService.warning('Não foi possível editar o representante ' + this.representante.nome + '.', true);
                });
    }




}
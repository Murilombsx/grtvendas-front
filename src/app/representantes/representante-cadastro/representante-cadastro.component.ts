import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RepresentanteObj } from '../representante-classes/representanteObj';
import { EnderecoObj } from '../../enderecos/endereco/enderecoObj';
import { AlertService } from '../../shared/alert/alert.service';
import { RepresentanteService } from '../representante-service/representante.service';

@Component({
    selector: 'grt-representante-cadastro',
    templateUrl: './representante-cadastro.component.html'
  })
  export class RepresentanteCadastroComponent implements OnInit{

    cadastroRepresentanteForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder, 
        private representanteService: RepresentanteService, 
        private router: Router,
        private alertService: AlertService){}

    ngOnInit(): void {
        this.cadastroRepresentanteForm = this.formBuilder.group({
            nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            cpf: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
            rg: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(11)]],
            email: ['', [Validators.required, Validators.email]],
            razaoSocial: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            cnpj: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18)]],
            telefone: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(14)]],
            rua: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            numero: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
            complemento: ['', Validators.maxLength(40)],
            bairro: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            cidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            estado: ['', Validators.required],
            cep: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
        })
    }

    redirecionaListaRepresentantes(){
        this.router.navigate(['representantes/listar'])
    }

    cadastrarRepresentante(){

        const nome = this.cadastroRepresentanteForm.get('nome').value;
        const cpf = this.cadastroRepresentanteForm.get('cpf').value;
        const rg = this.cadastroRepresentanteForm.get('rg').value;
        const email = this.cadastroRepresentanteForm.get('email').value;
        const razaoSocial = this.cadastroRepresentanteForm.get('razaoSocial').value;
        const cnpj = this.cadastroRepresentanteForm.get('cnpj').value;
        const telefone = this.cadastroRepresentanteForm.get('telefone').value;
        const rua = this.cadastroRepresentanteForm.get('rua').value;
        const numero = this.cadastroRepresentanteForm.get('numero').value;
        const complemento = this.cadastroRepresentanteForm.get('complemento').value;
        const bairro = this.cadastroRepresentanteForm.get('bairro').value;
        const cidade = this.cadastroRepresentanteForm.get('cidade').value;
        const estado = this.cadastroRepresentanteForm.get('estado').value;
        const cep = this.cadastroRepresentanteForm.get('cep').value;
        
        var endereco = new EnderecoObj(rua,numero,complemento,bairro,cidade,estado,cep);
        var representante = new RepresentanteObj(nome,cpf,rg,email,razaoSocial,cnpj,telefone,endereco);
        this.representanteService
            .cadastrarRepresentante(representante)
            .subscribe(
                () => {
                    this.alertService.succes('O Representante ' + nome + " foi cadastrado com sucesso!", true);
                    this.router.navigate(['representantes/listar']);
                },
                err => {
                    this.alertService.warning('Não foi possível cadastrar o representante ' + nome + '.', true);
                });
    }

  }
  
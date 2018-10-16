import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente-service/cliente.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/alert/alert.service';
import { RepresentanteService } from '../../representantes/representante-service/representante.service';
import { RepresentanteResumo } from '../../representantes/representante-classes/representante-resumo';
import { EnderecoObj } from '../../enderecos/endereco/enderecoObj';
import { RepresentanteIdObjEditavel } from '../../representantes/representante-classes/representanteIdObjEditavel';
import { ClienteObj } from '../cliente-classes/clienteObj';
import { RepresentanteResumoId } from '../../representantes/representante-classes/representante-resumo-id';

@Component({
    selector: 'grt-cliente-cadastro',
    templateUrl: './cliente-cadastro.component.html'
})
export class ClienteCadastroComponent implements OnInit {

    cadastroClienteForm: FormGroup;
    representantes: RepresentanteResumo[] = [];
    novoRepresentante: RepresentanteResumoId;

    constructor(
        private representanteService: RepresentanteService,
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
        private router: Router,
        private alertService: AlertService) { }


    ngOnInit(): void {

        this.representanteService
            .listaRepresentantes()
            .subscribe(representantes => {
                this.representantes = representantes;
            })

        this.cadastroClienteForm = this.formBuilder.group({
            nomeFantasia: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            razaoSocial: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            cnpj: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18)]],
            inscricaoEstadual: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
            pessoaContato: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            email: ['', [Validators.required, Validators.email]],
            telefone: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(14)]],
            rua: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            numero: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
            complemento: ['', Validators.maxLength(40)],
            bairro: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            cidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            estado: ['', Validators.required],
            cep: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
            representante: ['', Validators.required]
        })
    }

    redirecionaListaClientes() {
        this.router.navigate(['clientes/listar'])
    }

    cadastrarCliente() {

        const nomeFantasia = this.cadastroClienteForm.get('nomeFantasia').value;
        const razaoSocial = this.cadastroClienteForm.get('razaoSocial').value;
        const cnpj = this.cadastroClienteForm.get('cnpj').value;
        const inscricaoEstadual = this.cadastroClienteForm.get('inscricaoEstadual').value;
        const pessoaContato = this.cadastroClienteForm.get('pessoaContato').value;
        const email = this.cadastroClienteForm.get('email').value;
        const telefone = this.cadastroClienteForm.get('telefone').value;
        const rua = this.cadastroClienteForm.get('rua').value;
        const numero = this.cadastroClienteForm.get('numero').value;
        const complemento = this.cadastroClienteForm.get('complemento').value;
        const bairro = this.cadastroClienteForm.get('bairro').value;
        const cidade = this.cadastroClienteForm.get('cidade').value;
        const estado = this.cadastroClienteForm.get('estado').value;
        const cep = this.cadastroClienteForm.get('cep').value;
        const nomeRepresentante: string = this.cadastroClienteForm.get('representante').value;

        this.representanteService
            .buscaRepresentantePorNome(nomeRepresentante)
            .subscribe(representante => {
                this.novoRepresentante = representante;
                let idAux: number;
                let estadoAux: string;

                idAux = this.novoRepresentante.id;
                estadoAux = this.novoRepresentante.endereco.estado;

                var endereco = new EnderecoObj(rua, numero, complemento, bairro, cidade, estado, cep);
                let rep = new RepresentanteIdObjEditavel(idAux);
                var cliente = new ClienteObj(nomeFantasia, razaoSocial, cnpj, inscricaoEstadual, pessoaContato, email, telefone, endereco, rep);
                if(estado != estadoAux){
                    this.alertService.warning('O estado do cliente e do representante são diferentes!', true)
                } else {
                    this.clienteService
                        .cadastrarCliente(cliente)
                        .subscribe(
                            () => {
                                this.alertService.succes('O cliente ' + nomeFantasia + ' foi cadastrado com sucesso!', true);
                                this.router.navigate(['clientes/listar/']);
                            },
                            err => {
                                this.alertService.warning('Não foi possível cadastrar o cliente ' +nomeFantasia + '.', true);
                            });
                }
            });

    }




}
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../cliente-classes/cliente';
import { RepresentanteResumo } from '../../representantes/representante-classes/representante-resumo';
import { ClienteService } from '../cliente-service/cliente.service';
import { RepresentanteService } from '../../representantes/representante-service/representante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../shared/alert/alert.service';
import { EnderecoObj } from '../../enderecos/endereco/enderecoObj';
import { ClienteObjEditavel } from '../cliente-classes/clienteObjEditavel';
import { RepresentanteIdObjEditavel } from '../../representantes/representante-classes/representanteIdObjEditavel';
import { RepresentanteResumoId } from '../../representantes/representante-classes/representante-resumo-id';

@Component({
    selector: 'grt-cliente-editar',
    templateUrl: './cliente-editar.component.html'
})
export class ClienteEditarComponent implements OnInit {

    editarClienteForm: FormGroup;
    cliente: Cliente;
    representantes: RepresentanteResumo[] = [];
    idCliente: number;
    novoRepresentante: RepresentanteResumoId;

    constructor(
        private clienteService: ClienteService,
        private representanteService: RepresentanteService,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.idCliente = this.activatedRoute.snapshot.params.id;

        this.clienteService
            .detalheCliente(this.idCliente)
            .subscribe(cliente => {
                this.cliente = cliente
            });
        
        this.representanteService
            .listaRepresentantes()
            .subscribe(representantes => {
                this.representantes = representantes;
            })

        this.editarClienteForm = this.formBuilder.group({
            nomeFantasia: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            razaoSocial: [''],
            cnpj: [''],
            inscricaoEstadual: [''],
            pessoaContato: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            email: ['', [Validators.required, Validators.email]],
            telefone: ['', [Validators.minLength(13), Validators.maxLength(14)]],
            rua: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            numero: ['', [Validators.minLength(1), Validators.maxLength(5)]],
            complemento: ['', Validators.maxLength(40)],
            bairro: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            cidade: ['', [Validators.minLength(2), Validators.maxLength(40)]],
            estado: [''],
            cep: ['', [Validators.minLength(9), Validators.maxLength(9)]],
            representante: ['']

        })
    }

    voltaPaginaAnterior() {
        this.router.navigate(['clientes/detalhe/' + this.idCliente]);
    }

    editarCliente() {

        const nomeFantasia = this.editarClienteForm.get('nomeFantasia').value;
        const pessoaContato = this.editarClienteForm.get('pessoaContato').value;
        const email = this.editarClienteForm.get('email').value;
        const telefone = this.editarClienteForm.get('telefone').value;
        const rua = this.editarClienteForm.get('rua').value;
        const numero = this.editarClienteForm.get('numero').value;
        const complemento = this.editarClienteForm.get('complemento').value;
        const bairro = this.editarClienteForm.get('bairro').value;
        const cidade = this.editarClienteForm.get('cidade').value;
        const estado = this.editarClienteForm.get('estado').value;
        const cep = this.editarClienteForm.get('cep').value;
        const nomeRepresentante: string = this.editarClienteForm.get('representante').value;

        
        if(nomeRepresentante.length != 0){
            this.representanteService
                .buscaRepresentantePorNome(nomeRepresentante)
                .subscribe(representante => {
                    this.novoRepresentante = representante;
                    let idAux: number;
                    
                    idAux = this.novoRepresentante.id;

                    var endereco = new EnderecoObj(rua, numero, complemento, bairro, cidade, estado, cep);
                    let rep = new RepresentanteIdObjEditavel(idAux);
                    var cliente = new ClienteObjEditavel(this.idCliente, nomeFantasia, pessoaContato, email, telefone, endereco, rep);
                    this.clienteService
                        .editarCliente(cliente)
                        .subscribe(
                            () => {
                                this.alertService.succes('O cliente ' + this.cliente.nomeFantasia + ' foi editado com sucesso!', true);
                                this.router.navigate(['clientes/detalhe/' + this.idCliente]);
                            },
                            err => {
                                this.alertService.warning('Não foi possível editar o cliente ' + this.cliente.nomeFantasia + '.', true);
                            });
                    });
        } else {
            let idAux: number;
            idAux = this.cliente.representante.id;

            var endereco = new EnderecoObj(rua, numero, complemento, bairro, cidade, estado, cep);
            let rep = new RepresentanteIdObjEditavel(idAux);
            var cliente = new ClienteObjEditavel(this.idCliente, nomeFantasia, pessoaContato, email, telefone, endereco, rep);
            this.clienteService
                .editarCliente(cliente)
                .subscribe(
                    () => {
                        this.alertService.succes('O cliente ' + this.cliente.nomeFantasia + ' foi editado com sucesso!', true);
                        this.router.navigate(['clientes/detalhe/' + this.idCliente]);
                    },
                    err => {
                        this.alertService.warning('Não foi possível editar o cliente ' + this.cliente.nomeFantasia + '.', true);
                    });
        }
            
       
    }
}
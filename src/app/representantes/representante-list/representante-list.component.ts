import { Component, OnInit } from '@angular/core';
import { RepresentanteResumo } from '../representante-classes/representante-resumo';
import { Router } from '@angular/router';
import { RepresentanteService } from '../representante-service/representante.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'grt-representante-list',
  templateUrl: './representante-list.component.html'
})
export class RepresentanteListComponent implements OnInit {
  
  tipoForm: FormGroup;
  representantes: RepresentanteResumo[] = [];
  filter: any = '';
  type: string = 'nome';
  optNome: boolean = false;
  optEstado: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private representanteService: RepresentanteService,
    private router: Router){}

  ngOnInit(): void {

    this.tipoForm = this.formBuilder.group({
      tipo: ['']
    });

    this.representanteService
      .listaRepresentantes()
      .subscribe(representantes => {
        this.representantes = representantes
      });
  }

  redirecionaCadastroRepresentante(){
    this.router.navigate(['representantes/cadastrar'])
  }

  redirecionaDetalheRepresentante(id: number){
    this.router.navigate(['representantes/detalhe/' + id])
  }

  alteraTipo(){
    const tipo = this.tipoForm.get('tipo').value;
    this.type = tipo;
  }

  orderNome(){
    if(this.optNome == true){
      this.optNome = false;
    } else{
      this.optNome = true;
    }
  }

  orderEstado(){
    if(this.optEstado == true){
      this.optEstado = false;
    } else{
      this.optEstado = true;
    }
  }

}

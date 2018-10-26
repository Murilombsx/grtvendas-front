import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Representante } from '../representante-classes/representante';
import { RepresentanteResumo } from '../representante-classes/representante-resumo';
import { RepresentanteEditavel } from '../representante-classes/representante-editavel';
import { RepresentanteResumoId } from '../representante-classes/representante-resumo-id';

const API_URL = "https://grtvendas-springboot.herokuapp.com";

@Injectable({ providedIn: 'root' })
export class RepresentanteService{

    constructor(private http: HttpClient){}

    cadastrarRepresentante(representante: Representante){
        return this.http.post(API_URL + '/representantes/cadastrar', representante);
    }

    editarRepresentante(representante: RepresentanteEditavel){
        return this.http.post(API_URL + '/representantes/editar', representante);
    }

    listaRepresentantes(){
        return this.http
            .get<RepresentanteResumo[]>(API_URL + '/representantes/listar');
    }

    detalheRepresentante(id: number){
        return this.http.get<Representante>(API_URL + '/representantes/detalhe/' + id);
    }

    deletaRepresentante(id: number){
        return this.http.post(API_URL + '/representantes/deletar', id);
    }

    buscaRepresentantePorNome(nome: string){
        return this.http.get<RepresentanteResumoId>(API_URL + '/representantes/buscar/' + nome);
    }

}
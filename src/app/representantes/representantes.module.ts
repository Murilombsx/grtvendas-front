import { NgModule } from '@angular/core';

import { RepresentanteListModule } from './representante-list/representante-list.module';
import { RepresentanteCadastroModule } from './representante-cadastro/representante-cadastro.module';
import { RepresentanteDetalheModule } from './representante-detalhe/representante-detalhe.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RepresentanteEditarModule } from './representante-editar/representante-editar.module';

@NgModule({
    imports : [ 
        RepresentanteListModule,
        RepresentanteCadastroModule,
        RepresentanteDetalheModule,
        RepresentanteEditarModule,
        CommonModule,
        HttpClientModule
    ]
})
export class RepresentantesModule{}
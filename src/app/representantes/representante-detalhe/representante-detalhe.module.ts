import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentanteDetalheComponent } from './representante-detalhe.component';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations:[
        RepresentanteDetalheComponent
    ],
    imports:[ 
        CommonModule,
        DarkenOnHoverModule
    ]
})
export class RepresentanteDetalheModule{}
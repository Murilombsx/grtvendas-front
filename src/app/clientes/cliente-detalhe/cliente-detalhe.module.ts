import { NgModule } from '@angular/core';
import { ClienteDetalheComponent } from './cliente-detalhe.component';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations:[
        ClienteDetalheComponent
    ],
    imports:[ 
        CommonModule,
        DarkenOnHoverModule
    ]
})
export class ClienteDetalheModule{}
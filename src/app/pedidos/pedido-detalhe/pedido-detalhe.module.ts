import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { PedidoDetalheComponent } from './pedido-detalhe.component';

@NgModule({
    declarations:[
        PedidoDetalheComponent
    ],
    imports:[ 
        CommonModule,
        DarkenOnHoverModule
    ]
})
export class PedidoDetalheModule{}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchModule } from '../../shared/components/search/search.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PedidoListComponent } from './pedido-list.component';
import { filterPedido } from './filters/filter-pedido.pipe';
import { filterOrderNumero } from './filters/filter-order-numero.pipe';
import { filterOrderNomeFantasia } from './filters/filter-order-nome-fantasia.pipe';
import { filterOrderCNPJ } from './filters/filter-order-cnpj.pipe';
import { filterOrderRepresentante } from './filters/filter-order-representante.pipe';
import { filterOrderCidade } from './filters/filter-order-cidade.pipe';
import { filterOrderEstado } from './filters/filter-order-estado.pipe';

@NgModule({
    declarations:[
        PedidoListComponent,
        filterPedido,
        filterOrderNumero,
        filterOrderNomeFantasia,
        filterOrderCNPJ,
        filterOrderRepresentante,
        filterOrderCidade,
        filterOrderEstado
    ],
    imports:[ 
        CommonModule,
        DarkenOnHoverModule,
        SearchModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class PedidoListModule{}
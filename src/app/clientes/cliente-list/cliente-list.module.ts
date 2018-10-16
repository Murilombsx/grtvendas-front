import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchModule } from '../../shared/components/search/search.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list.component';
import { filterCliente } from './filters/filter-cliente.pipe';
import { filterOrderNomeFantasia } from './filters/filter-order-nome-fantasia.pipe';
import { filterOrderRazaoSocial } from './filters/filter-order-razao-social.pipe';
import { filterOrderEstado } from './filters/filter-order-estado.pipe';
import { filterOrderRepresentante } from './filters/filter-order-representante.pipe';
import { filterOrderCNPJ } from './filters/filter-order-cnpj.pipe';

@NgModule({
    declarations:[
        ClienteListComponent,
        filterCliente,
        filterOrderNomeFantasia,
        filterOrderRazaoSocial,
        filterOrderCNPJ,
        filterOrderRepresentante,
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
export class ClienteListModule{}
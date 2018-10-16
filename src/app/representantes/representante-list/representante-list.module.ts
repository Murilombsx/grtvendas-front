import { NgModule } from '@angular/core';
import { RepresentanteListComponent } from './representante-list.component';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchModule } from '../../shared/components/search/search.module';
import { filterRepresentante } from './filters/filter-representante.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { filterOrderNome } from './filters/filter-order-nome.pipe';
import { filterOrderEstado } from './filters/filter-order-estado.pipe';

@NgModule({
    declarations:[
        RepresentanteListComponent,
        filterRepresentante,
        filterOrderNome,
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
export class RepresentanteListModule{}
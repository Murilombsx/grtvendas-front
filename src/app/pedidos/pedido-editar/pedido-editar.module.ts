import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PedidoEditarComponent } from './pedido-editar.component';

@NgModule({
    declarations:[
        PedidoEditarComponent
    ],
    imports:[ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule
    ]
})
export class PedidoEditarModule{}
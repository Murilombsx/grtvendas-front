import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PedidoCadastroComponent } from './pedido-cadastro.component';

@NgModule({
    declarations:[
        PedidoCadastroComponent
    ],
    imports:[ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]
})
export class PedidoCadastroModule{}
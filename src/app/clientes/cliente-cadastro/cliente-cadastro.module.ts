import { NgModule } from '@angular/core';
import { ClienteCadastroComponent } from './cliente-cadastro.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        ClienteCadastroComponent
    ],
    imports:[ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]
})
export class ClienteCadastroModule{}
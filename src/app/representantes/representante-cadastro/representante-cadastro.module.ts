import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentanteCadastroComponent } from './representante-cadastro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations:[
        RepresentanteCadastroComponent
    ],
    imports:[ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]
})
export class RepresentanteCadastroModule{}
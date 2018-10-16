import { NgModule } from '@angular/core';
import { RepresentanteEditarComponent } from './representante-editar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations:[
        RepresentanteEditarComponent
    ],
    imports:[ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule
    ]
})
export class RepresentanteEditarModule{}
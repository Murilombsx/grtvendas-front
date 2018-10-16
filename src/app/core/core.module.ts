import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from '../shared/alert/alert.module';

@NgModule({
    declarations: [ 
        HeaderComponent,
        FooterComponent 
    ],
    exports: [ 
        HeaderComponent,
        FooterComponent
    ],
    imports: [ 
        CommonModule,
        AlertModule
    ]
})
export class CoreModule{}
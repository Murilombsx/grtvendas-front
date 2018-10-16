import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClienteListModule } from './cliente-list/cliente-list.module';
import { ClienteDetalheModule } from './cliente-detalhe/cliente-detalhe.module';
import { ClienteEditarModule } from './cliente-editar/cliente-editar.module';
import { ClienteCadastroModule } from './cliente-cadastro/cliente-cadastro.module';

@NgModule({
    imports : [
        ClienteListModule,
        ClienteDetalheModule,
        ClienteEditarModule,
        ClienteCadastroModule,
        CommonModule,
        HttpClientModule
    ]
})
export class ClientesModule{}
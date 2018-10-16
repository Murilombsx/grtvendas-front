import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PedidoListModule } from './pedido-list/pedido-list.module';
import { PedidoDetalheModule } from './pedido-detalhe/pedido-detalhe.module';
import { PedidoCadastroModule } from './pedido-cadastro/pedido-cadastro.module';
import { PedidoEditarComponent } from './pedido-editar/pedido-editar.component';
import { PedidoEditarModule } from './pedido-editar/pedido-editar.module';

@NgModule({
    imports : [
        PedidoListModule,
        PedidoDetalheModule,
        PedidoCadastroModule,
        PedidoEditarModule,
        CommonModule,
        HttpClientModule
    ]
})
export class PedidosModule{}
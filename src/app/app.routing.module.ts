import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { PageGuard } from './core/auth/page.guard';
import { RepresentanteListComponent } from './representantes/representante-list/representante-list.component';
import { RepresentanteCadastroComponent } from './representantes/representante-cadastro/representante-cadastro.component';
import { RepresentanteDetalheComponent } from './representantes/representante-detalhe/representante-detalhe.component';
import { RepresentanteEditarComponent } from './representantes/representante-editar/representante-editar.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteDetalheComponent } from './clientes/cliente-detalhe/cliente-detalhe.component';
import { ClienteEditarComponent } from './clientes/cliente-editar/cliente-editar.component';
import { ClienteCadastroComponent } from './clientes/cliente-cadastro/cliente-cadastro.component';
import { PedidoListComponent } from './pedidos/pedido-list/pedido-list.component';
import { PedidoDetalheComponent } from './pedidos/pedido-detalhe/pedido-detalhe.component';
import { PedidoCadastroComponent } from './pedidos/pedido-cadastro/pedido-cadastro.component';
import { PedidoEditarComponent } from './pedidos/pedido-editar/pedido-editar.component';

const routes: Routes = [
    { 
        path: '', 
        component: SignInComponent,
        canActivate: [ AuthGuard ]
    },
    { 
        path: 'pedidos/listar', 
        component: PedidoListComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'pedidos/detalhe/:id', 
        component: PedidoDetalheComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'pedidos/cadastrar', 
        component: PedidoCadastroComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'pedidos/editar/:id', 
        component: PedidoEditarComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'clientes/cadastrar', 
        component: ClienteCadastroComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'clientes/listar', 
        component: ClienteListComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'clientes/detalhe/:id', 
        component: ClienteDetalheComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'clientes/editar/:id', 
        component: ClienteEditarComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'representantes/cadastrar', 
        component: RepresentanteCadastroComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'representantes/listar', 
        component: RepresentanteListComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'representantes/detalhe/:id', 
        component: RepresentanteDetalheComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: 'representantes/editar/:id', 
        component: RepresentanteEditarComponent,
        canActivate: [ PageGuard ]
    },
    { 
        path: '**', 
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}
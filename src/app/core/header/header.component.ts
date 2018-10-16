import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
    selector: 'grt-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    user$: Observable<User>;

    constructor(private userService: UserService, private router: Router){
        this.user$ = userService.getUser();
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

    pedidos(){
        this.router.navigate(['pedidos/listar']);
    }

    representantes(){
        this.router.navigate(['representantes/listar']);
    }

    clientes(){
        this.router.navigate(['clientes/listar']);
    }

}
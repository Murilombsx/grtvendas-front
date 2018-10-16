import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder, 
        private authService: AuthService,
        private router: Router){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            senha: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    login(){
        const email = this.loginForm.get('email').value;
        const senha = this.loginForm.get('senha').value;

        this.authService
            .autentica(email, senha)
            .subscribe(
                () => this.router.navigate(['pedidos/listar']),
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.emailInput.nativeElement.focus();
                    alert('Usuário ou senha inválidos!')
                }
            );
    }

}
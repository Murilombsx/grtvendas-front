import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'https://grtvendas-springboot.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) {}

    autentica(email: string, senha: string){

      return this.http
        .post(API_URL + '/usuario/login', {email: email, senha: senha}, {observe: 'response'})
        .pipe(tap(res => {
          const authToken = res.headers.get('x-access-token');
          this.userService.setToken(authToken);
        }));

    }

}

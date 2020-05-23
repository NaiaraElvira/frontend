import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:8080/projeto-0.0.1-SNAPSHOT/resources';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(login: string, password: string) {
   
    return this.http
    .post(
      API_URL + '/users/login', 
      { login: login, password: password }, 
      { observe: 'response'} 
    ).pipe(tap(res => {
      const token = res.headers.get('Authorization');
      this.userService.setToken(token);
      console.log(token);
    }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Operador } from './operador';

const API = 'http://localhost:8080/projeto-0.0.1-SNAPSHOT/resources';

@Injectable({providedIn: 'root'})
export class PessoaService {
    constructor(private http: HttpClient){}

    // listarOperador(){
    //     return this.http.get<Operador[]>(API + '/pessoa');
    // }

}
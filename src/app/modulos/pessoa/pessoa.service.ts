import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa';
// import { Operador } from './operador';

const API = 'http://localhost:8080/projeto-0.0.1-SNAPSHOT/resources';

@Injectable({providedIn: 'root'})
export class PessoaService {
    constructor(private http: HttpClient){}

    listarPessoa(){
        return this.http.get<Pessoa[]>(API + '/pessoa');
    }

}
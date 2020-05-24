import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operador } from './operador';

const API = 'http://localhost:8080/projeto-0.0.1-SNAPSHOT/resources';

@Injectable({providedIn: 'root'})
export class OperadorService {
    constructor(private http: HttpClient){}

    cadastrarOperador(p: Operador){
        return this.http.post(API + '/operador', p);
    }
    alterarOperador(p: Operador){
        return this.http.put(API + '/operador', p);
    }

    consultarOperador(id: number){
        return this.http.get<Operador>(API + '/operador/' + id);
    }

    listarOperador(){
        return this.http.get<Operador[]>(API + '/operador');
    }

    tipoPerfil(){
        return this.http.get<object>(API + '/operador/tipo-perfil');
    }

}
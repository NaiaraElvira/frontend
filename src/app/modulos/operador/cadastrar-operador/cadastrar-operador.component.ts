import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { OperadorService } from '../operador.service';
import { Operator } from 'rxjs';
import { Operador } from '../operador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-operador',
  templateUrl: './cadastrar-operador.component.html',
  styleUrls: ['./cadastrar-operador.component.css']
})
export class CadastrarOperadorComponent implements OnInit {
  cadastrarForm: FormGroup;
  perfils: any;
  operador: Operador;

   constructor(fb: FormBuilder, private operadorService: OperadorService, private router: Router) 
   {
       this.cadastrarForm = fb.group({
           nome: ["", Validators.required],
           login: ["", Validators.required],
           senha: ["", Validators.required],
           perfil: ["", Validators.required]
       });
   }

  ngOnInit() {
    this.operadorService.listarOperador().subscribe(
      res => {
        console.log('RESPOSTA ==> ', res);
      },
      err => {
          console.log(err);
      }
    );

    this.listarPerfils();
     
  }

  listarPerfils(){
    this.operadorService.tipoPerfil().subscribe(
      res => {
        this.perfils = res;
        console.log('RESPOSTA ==> ', res);
      },
      err => {
          console.log(err);
      }
    );
  }

  consultarOperador(){
    this.operadorService.consultarOperador(1).subscribe(
      res => {
        console.log('RESPOSTA 2==> ', res);
      },
      err => {
          console.log(err);
      }
    );
  }

  cadastrarOperador() {
    console.log('USEUARIO => ', this.cadastrarForm.value);
    this.operadorService.cadastrarOperador(this.cadastrarForm.value).subscribe(
      res => {
        console.log('RESPOSTA 2==> ', res);
      },
      err => {
          console.log(err);
      }
    );
  }

  voltar() {
    this.router.navigate(['operador','listar'])
  }

}

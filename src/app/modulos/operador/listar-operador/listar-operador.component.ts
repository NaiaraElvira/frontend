import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OperadorService } from '../operador.service';
import { Operador } from '../operador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-operador',
  templateUrl: './listar-operador.component.html',
  styleUrls: ['./listar-operador.component.css']
})
export class ListarOperadorComponent implements OnInit {
  listarForm: FormGroup;
  operadores: Operador[];


  constructor(private fb: FormBuilder, private operadorService: OperadorService, private router:Router) { }

  ngOnInit() {
    this.listarForm = this.fb.group({});
    this.listarOperadores();
  }

  listarOperadores(){
    this.operadorService.listarOperador().subscribe(
      res => {
        this.operadores = res;
        console.log('RESPOSTAs ==> ', this.operadores);
      },
      err => {
          console.log(err);
      }
    );
  }

  irParaCadastro(){
    this.router.navigate(['operador','cadastrar'])
  }

}

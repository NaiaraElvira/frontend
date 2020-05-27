import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OperadorService } from '../operador.service';
import { Operador } from '../operador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-operador',
  templateUrl: './listar-operador.component.html',
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
      },
      err => {
          console.log(err);
      }
    );
  }

  irParaCadastro(){
    this.router.navigate(['operador','cadastrar'])
  }

  irParaEditar(id: number){
    this.router.navigate(['operador','cadastrar', id])
  }

  excluirOperador(operador: Operador){
    this.operadorService.excluirOperador(operador.id).subscribe(
      res => {
        let index = this.operadores.indexOf(operador);
        this.operadores.splice(index, 1);
       console.log(res);
      },
      err => {
          console.log(err);
      }
    );
  }

}

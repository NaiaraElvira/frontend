import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
})
export class ListarPessoaComponent implements OnInit {
  listarForm: FormGroup;
  pessoas: Pessoa[];



  constructor(private fb: FormBuilder, private pessoaService: PessoaService, private router:Router) { }

  ngOnInit() {
    this.listarForm = this.fb.group({});
    this.listarPessoa();
  }

  listarPessoa(){
    this.pessoaService.listarPessoa().subscribe(
      res => {
       this.pessoas = res;
      },
      err => {
          console.log(err);
      }
    );
  }

  irParaCadastro(){
    this.router.navigate(['pessoa','cadastrar'])
  }

  irParaEditar(id: number){
    this.router.navigate(['pessoa','cadastrar', id])
  }
}

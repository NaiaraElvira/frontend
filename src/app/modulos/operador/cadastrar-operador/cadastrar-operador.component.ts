import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { OperadorService } from '../operador.service';
import { Operador } from '../operador';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { OperadorModule } from '../operador.module';
import { AlertsService } from 'src/app/shared/component/alerts/alerts.service';

@Component({
  selector: 'app-cadastrar-operador',
  templateUrl: './cadastrar-operador.component.html',
})
export class CadastrarOperadorComponent implements OnInit {
  cadastrarForm: FormGroup;
  perfils: any;
  operador: Operador;
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

   constructor(private fb: FormBuilder, 
    private operadorService: OperadorService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertsService) 
   { 
   }

  ngOnInit() {
    const operador = this.activatedRoute.snapshot.params.id;
    this.cadastrarForm = this.fb.group({
      nome: ["", Validators.required],
      login: ["", Validators.required],
      senha: ["", Validators.required],
      perfil: ["", Validators.required]
  });
  operador && this.consultarOperador(operador);

    this.listarPerfils();
  }

  listarPerfils(){
    this.operadorService.tipoPerfil().subscribe(
      res => {
        this.perfils = res;
      },
      err => {
          console.log(err);
      }
    );
  }

  consultarOperador(id: number){
    this.operadorService.consultarOperador(id).subscribe(
      res => {
        this.operador = res;
        this.cadastrarForm.get('nome').setValue(this.operador.nome);
        this.cadastrarForm.get('login').setValue(this.operador.login);
        this.cadastrarForm.get('perfil').setValue(this.operador.perfil);
        this.cadastrarForm.get('senha').setValidators([]); // or clearValidators()
        this.cadastrarForm.get('senha').updateValueAndValidity();      },
      err => {
          console.log(err);
      }
    );
  }

  cadastrarOperador() {
    let valorSenha = this.cadastrarForm.value.senha;
    if(!valorSenha){
      this.cadastrarForm.get('senha').setValue(this.operador.senha);
    }
    if(!this.operador){
      this.operadorService.cadastrarOperador(this.cadastrarForm.value).subscribe(
        res => {
          this.alertService.success('Cadastrado com sucesso!!', this.options);
          this.resetForm(this.cadastrarForm);
          console.log('RESPOSTA 2==> ', res);
        },
        err => {
            console.log(err);
        }
      );
    }else{
        this.editar();
    }
   
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      form.get(key).setErrors(null) ;
    });
  }

  editar(){
    let operadorTMP = this.cadastrarForm.value;
    operadorTMP.id = this.operador.id;
    operadorTMP.data_cadastro = this.operador.data_cadastro;

    this.operadorService.alterarOperador(operadorTMP).subscribe(
      res => {
        this.alertService.success('Alterado com sucesso!!', this.options);
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

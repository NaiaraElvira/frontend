import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { VisualizarPessoaComponent } from './visualizar-pessoa/visualizar-pessoa.component';

@NgModule({
    declarations: [ 
        CadastrarPessoaComponent,
        ListarPessoaComponent,
        VisualizarPessoaComponent
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [
    ]
})
export class PessoaModule { }
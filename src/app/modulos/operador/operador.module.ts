import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CadastrarOperadorComponent } from './cadastrar-operador/cadastrar-operador.component';
import { ListarOperadorComponent } from './listar-operador/listar-operador.component';
import { VisualizarOperadorComponent } from './visualizar-operador/visualizar-operador.component';



@NgModule({
    declarations: [ 
        CadastrarOperadorComponent,
        ListarOperadorComponent,
        VisualizarOperadorComponent
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
export class OperadorModule { }
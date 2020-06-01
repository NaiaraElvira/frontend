import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CadastrarOperadorComponent } from './cadastrar-operador/cadastrar-operador.component';
import { ListarOperadorComponent } from './listar-operador/listar-operador.component';
import { VisualizarOperadorComponent } from './visualizar-operador/visualizar-operador.component';
import { AlertsModule } from 'src/app/shared/component/alerts/alerts.module';
import { MensagemErrorModule } from 'src/app/shared/component/mensagem-error/mensagem-error.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.modules';



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
        RouterModule,
        AlertsModule,
        MensagemErrorModule,
        DirectivesModule,

    ],
    providers: [
        // ActivatedRouteSnapshot
    ]
})
export class OperadorModule { }
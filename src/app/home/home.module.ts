import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MensagemErrorModule } from '../shared/component/mensagem-error/mensagem-error.module';


@NgModule({
    declarations: [ 
        LoginComponent
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MensagemErrorModule,
        RouterModule
    ],
    providers: [
    ]
})
export class HomeModule { }
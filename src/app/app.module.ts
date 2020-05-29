import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ModulosModule } from './modulos/modulos.modules';
import { AppRoutersModule } from './app.routers.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { OperadorModule } from './modulos/operador/operador.module';
import { PessoaModule } from './modulos/pessoa/pessoa.module';
import { MensagemErrorModule } from './shared/component/mensagem-error/mensagem-error.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModulosModule,
    OperadorModule,
    PessoaModule,
    AppRoutersModule,
    HomeModule,
    CoreModule,
    MensagemErrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

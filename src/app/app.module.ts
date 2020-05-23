import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ModulosModule } from './modulos/modulos.modules';
import { AppRoutersModule } from './app.routers.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { OperadorModule } from './modulos/operador/operador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModulosModule,
    OperadorModule,
    AppRoutersModule,
    HomeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CadastrarPessoaComponent } from "./modulos/pessoa/cadastrar-pessoa/cadastrar-pessoa.component";
import { ListarPessoaComponent } from "./modulos/pessoa/listar-pessoa/listar-pessoa.component";
import { VisualizarPessoaComponent } from "./modulos/pessoa/visualizar-pessoa/visualizar-pessoa.component";
import { CadastrarOperadorComponent } from "./modulos/operador/cadastrar-operador/cadastrar-operador.component";
import { VisualizarOperadorComponent } from "./modulos/operador/visualizar-operador/visualizar-operador.component";
import { ListarOperadorComponent } from "./modulos/operador/listar-operador/listar-operador.component";
import { LoginComponent } from "./home/login/login.component";
import { AuthGuard } from "./core/auth/auth.guard";


const routers: Routes = [
    {path:'', pathMatch: 'full', redirectTo: 'home'},
    {path:'home', component: LoginComponent, canActivate: [AuthGuard]},
    {path:'pessoa/cadastrar', component: CadastrarPessoaComponent},
    {path:'pessoa/listar', component: ListarPessoaComponent},
    {path:'pessoa/visualizar', component: VisualizarPessoaComponent},
    {path:'operador/cadastrar', component: CadastrarOperadorComponent},
    {path:'operador/listar', component: ListarOperadorComponent},
    {path:'operador/visualizar', component: VisualizarOperadorComponent}
]
@NgModule({
     imports:[
         RouterModule.forRoot(routers)
     ],
     exports: [RouterModule]
})
export class AppRoutersModule {}
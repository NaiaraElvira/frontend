import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { CadastrarPessoaComponent } from "./pessoa/cadastrar-pessoa/cadastrar-pessoa.component";
import { ListarPessoaComponent } from "./pessoa/listar-pessoa/listar-pessoa.component";
import { VisualizarPessoaComponent } from "./pessoa/visualizar-pessoa/visualizar-pessoa.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[
        CadastrarPessoaComponent,
        ListarPessoaComponent,
        VisualizarPessoaComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ]
})

export class ModulosModule {}
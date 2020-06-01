import { NgModule } from "@angular/core";
import { LetrasDirective } from "./somente-letras/letras.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        LetrasDirective,
      ],
    exports: [
       LetrasDirective
      ]
})
export class DirectivesModule {}
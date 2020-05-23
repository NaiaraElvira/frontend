import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-error',
  templateUrl: './mensagem-error.component.html',
})
export class MensagemErrorComponent {
  @Input() text = '';
}

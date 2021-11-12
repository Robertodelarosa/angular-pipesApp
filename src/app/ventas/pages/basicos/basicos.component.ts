import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'roberto';
  nombreUpper: string = 'ROBERTO';
  nombreCompleto: string = 'roberto de la rosa';
  fecha: Date = new Date();
}

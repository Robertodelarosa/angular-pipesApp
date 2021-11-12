import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  nombre: string = "Roberto";
  genero: string = "masculino";

  // i18Select
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Roberto', 'Fernando']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = "Maria";
    this.genero = "femenino";
  }

  eliminarCliente() {
    this.clientes.shift();
  }

  // KeyValuePipe
  persona = {
    nombre: 'Roberto',
    edad: 22,
    direccion: 'Nuevo Leon'
  }

  // JsonPipe
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Robin', vuela: false },
    { nombre: 'Acuaman', vuela: false },
  ]

  //Async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3000)
  });
}

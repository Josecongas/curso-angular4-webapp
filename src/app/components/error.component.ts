import { Component } from '@angular/core';
@Component({
  selector: 'error',
  templateUrl: '../views/error.component.html'
})
export class ErrorComponent {
  public titulo: string;
  constructor() {
    this.titulo = 'Página no encontrada';
  }

  ngOnInit() {
    console.log('Componente de error cargado');
  }
}

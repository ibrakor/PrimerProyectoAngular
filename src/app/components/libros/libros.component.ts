import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  tituloLibro: string = '';
  libros: string[] = [];
  boton: string = "Añadir libro"
  addToArray(){
    if (this.tituloLibro!="")
    this.libros.push(this.tituloLibro)
  }
}




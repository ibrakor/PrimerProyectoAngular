import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  tituloLibro: string = '';  // Propiedad para almacenar el valor del input
}
addEventListener("DOMContentLoaded", function () {

  // @ts-ignore
  document.getElementById("add").addEventListener("click", function () {

    // @ts-ignore
    document.getElementById("result").textContent= document.getElementById("libro").value

  })

})


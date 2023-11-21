import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  tituloLibro: string = '';
}
let libros = new Array()
addEventListener("DOMContentLoaded", function () {

  // @ts-ignore
  document.getElementById("add").addEventListener("click", function () {
    // @ts-ignore
    let valor = document.getElementById("libro").value
    // @ts-ignore
    document.getElementById("result").textContent= valor
    libros.push(valor)

  })

})


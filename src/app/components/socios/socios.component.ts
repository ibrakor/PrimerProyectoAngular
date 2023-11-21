import { Component } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent {

}
let socios = new Array()

addEventListener("DOMContentLoaded", function () {

  // @ts-ignore
  document.getElementById("addCod").addEventListener("click", function () {
    // @ts-ignore
    let valor = document.getElementById("codigo").value
    // @ts-ignore
    document.getElementById("resultCod").textContent= valor
    socios.push(valor)

  })

})

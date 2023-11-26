import { Component } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent {
  codigos : string[]=[];
  codigo : string =''
  boton: string = "Añadir socio"

  addToArray(){
    this.codigos.push(this.codigo)
  }

}



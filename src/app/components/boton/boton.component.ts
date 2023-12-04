import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Output() clickEnBoton = new EventEmitter();
  @Input() label = "";

  onClick() {
    this.clickEnBoton.emit();

  }
}

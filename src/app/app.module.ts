import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibrosComponent } from './components/libros/libros.component';
import { SociosComponent } from './components/socios/socios.component';
import {ɵEmptyOutletComponent} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { BotonComponent } from './components/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    SociosComponent,
    BotonComponent
  ],
    imports: [
        BrowserModule,
        ɵEmptyOutletComponent,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

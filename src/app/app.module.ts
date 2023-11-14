import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibrosComponent } from './components/libros/libros.component';
import { SociosComponent } from './components/socios/socios.component';
import {ɵEmptyOutletComponent} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    SociosComponent
  ],
  imports: [
    BrowserModule,
    ɵEmptyOutletComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

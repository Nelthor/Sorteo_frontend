import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GanadoresComponent } from './ganadores/ganadores.component';
import { PersonasComponent } from './personas/personas.component';
import { PremiosComponent } from './premios/premios.component';
import {PersonaService} from './personas/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GanadoresComponent,
    PersonasComponent,
    PremiosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

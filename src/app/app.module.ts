import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GanadoresComponent } from './ganadores/ganadores.component';
import { PersonasComponent } from './personas/personas.component';
import { PremiosComponent } from './premios/premios.component';
import {PersonaService} from './personas/persona.service';
import {RouterModule, Routes} from '@angular/router'
import {PremioService} from './premios/premio.service';

import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './personas/form.component';
import {FormsModule} from '@angular/forms'

const routes: Routes=[
  {path: '', redirectTo:'/personas', pathMatch: 'full'},
  {path: 'Lenguajes', component: GanadoresComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'premios', component: PremiosComponent},
  {path: 'personas/form', component: FormComponent},
  {path: 'personas/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GanadoresComponent,
    PersonasComponent,
    PremiosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonaService, PremioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

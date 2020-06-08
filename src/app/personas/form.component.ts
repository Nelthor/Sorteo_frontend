import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';
import {PersonaService} from './persona.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  persona:Persona=new Persona();
  titulo:string="Crear Cliente"

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  public create():void{
    console.log("Clicked!")
    console.log(this.persona)
  }
}

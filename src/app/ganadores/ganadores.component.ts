import { Component, OnInit } from '@angular/core';
import {PremioService} from '../premios/premio.service';
import {Persona} from '../personas/persona';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html'
})
export class GanadoresComponent implements OnInit {

  listaCurso: string[]=['TypeScript', 'JavaScript', 'Java EE','C#','VB','SQL'];

  habilitar: boolean=true;
personas:Persona[]=[];
  constructor(private premioService: PremioService) { }

  ngOnInit(): void {
    this.premioService.sorteo().subscribe(
      personas => this.personas=personas
    );
  }
  setHabilitar():void{
    this.habilitar=(this.habilitar==true)? false: true;
  }

}

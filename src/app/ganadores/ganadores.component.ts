import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html'
})
export class GanadoresComponent implements OnInit {

  listaCurso: string[]=['TypeScript', 'JavaScript', 'Java SE','C#','PHP'];

  habilitar: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  setHabilitar():void{
    this.habilitar=(this.habilitar==true)? false: true;
  }

}

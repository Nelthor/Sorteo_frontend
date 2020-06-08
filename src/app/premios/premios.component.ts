import { Component, OnInit } from '@angular/core';
import {Premio} from './premio'

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html'
})
export class PremiosComponent implements OnInit {

  premio:Premio[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}

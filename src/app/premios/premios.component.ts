import { Component, OnInit } from '@angular/core';
import {Premio} from './premio'
import {PremioService} from './premio.service';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html'
})
export class PremiosComponent implements OnInit {

  premios:Premio[]=[];
  constructor(private premioService: PremioService) { }

  ngOnInit(): void {
    this.premioService.getPremios().subscribe(
      premios=>this.premios=premios
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';
import {PersonaService} from './persona.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  persona:Persona=new Persona();
  titulo:string="Crear Cliente"

  constructor(private personaService: PersonaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPersona()
  }

  cargarPersona():void{
    this.activatedRoute.params.subscribe(params=>{
      let id=params['id']
      if(id){
        this.personaService.getPersona(id).subscribe((persona)=> this.persona=persona)
      }
    })
  }
  public create():void{
    this.personaService.create(this.persona).subscribe(
      persona=>{
        this.router.navigate(['/personas'])
        swal.fire('Nueva Persona', `${persona.nombre} Creado(a) con éxito`,'success')
      }
    )
  }

  public update():void{
    this.personaService.update(this.persona).subscribe(persona=>{
      this.router.navigate(['/personas'])
      swal.fire('Persona Actualizada', `${persona.nombre} actualizado(a) con éxito`,'success')
    })
  }

}

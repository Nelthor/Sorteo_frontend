import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';
import {PersonaService} from './persona.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent implements OnInit {

  personas:Persona[]=[];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      personas => this.personas=personas
    );
  }

  delete(persona: Persona):void{
    Swal.fire({
  title: '¿Está seguro?',
  text: "Esta a punto de eliminar esta persona",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si, Eliminar!'
}).then((result) => {
  if (result.value) {
    this.personaService.delete(persona.id).subscribe(
      response=>{
        this.personas=this.personas.filter(per=>per!=persona)
        Swal.fire(
          'Eliminado!',
          'Persona eliminada con éxito',
          'success'
        )
      }
    )

  }
})
  }


}

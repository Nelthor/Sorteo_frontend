import { Injectable } from '@angular/core';
import {PERSONAS} from './personas.json'
import {Persona} from './persona';
import {Observable} from 'rxjs'
import {of} from 'rxjs'

@Injectable()
export class PersonaService {

  constructor() { }

  getPersonas():Observable<Persona[]>{
    return of(PERSONAS);
  }
}

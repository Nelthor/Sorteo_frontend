import { Injectable } from '@angular/core';
import {Persona} from './persona';
import {Observable} from 'rxjs'
import {of} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'


@Injectable()
export class PersonaService {

  private urlEndPoint:string='http://localhost:8080/prueba/personas';

  private httpHeaders =new HttpHeaders({'Content-Type':'aplication/json'})

  constructor(private http: HttpClient) { }

  getPersonas():Observable<Persona[]>{
    //return of(PERSONAS);
    return this.http.get(this.urlEndPoint).pipe(
      map(response=>response as Persona[])
    );
  }

  create(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.urlEndPoint,persona,{headers: this.httpHeaders});
  }
}

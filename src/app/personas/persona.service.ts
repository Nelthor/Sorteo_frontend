import { Injectable } from '@angular/core';
import {Persona} from './persona';
import {Observable,throwError} from 'rxjs'
import {of} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map, catchError} from 'rxjs/operators'
import swal from 'sweetalert2'


@Injectable()
export class PersonaService {

  private urlEndPoint:string='http://localhost:8080/prueba/personas';

  private httpHeaders =new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})

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

  getPersona(id): Observable<Persona>{
    return this.http.get<Persona>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e=>{
        swal.fire('Error al editar', 'error');
        return throwError(e);
      })
    )
  }

  update(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.urlEndPoint}/${persona.id}`, persona,{headers: this.httpHeaders})
  }

  delete(id:number): Observable<Persona>{
    return this.http.delete<Persona>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }
}

import { Injectable } from '@angular/core';
import {Premio} from './premio';
import {Observable} from 'rxjs'
import {of} from 'rxjs'
import {map} from 'rxjs/operators'
import {HttpClient} from '@angular/common/http'
import {Persona} from '../personas/persona';


@Injectable()

export class PremioService {

private urlEndPoint:string='http://localhost:8080/sorteo/premios';
private urlEndPointPer:string='http://localhost:8080/sorteo/ganadores';
  constructor(private http: HttpClient) { }

  getPremios():Observable<Premio[]>{
    //return of(PREMIOS);
    return this.http.get(this.urlEndPoint).pipe(
      map(response=>response as Premio[])
    );
  }

  sorteo():Observable<Persona[]>{
    return this.http.get(this.urlEndPointPer).pipe(
      map(response=>response as Persona[])
    );
  }
}

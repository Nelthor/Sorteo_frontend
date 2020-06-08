import { Injectable } from '@angular/core';
import {Premio} from './premio';
import {Observable} from 'rxjs'
import {of} from 'rxjs'
import {map} from 'rxjs/operators'
import {HttpClient} from '@angular/common/http'


@Injectable()

export class PremioService {

private urlEndPoint:string='http://localhost:8080/sorteo/premios';

  constructor(private http: HttpClient) { }

  getPremios():Observable<Premio[]>{
    //return of(PREMIOS);
    return this.http.get(this.urlEndPoint).pipe(
      map(response=>response as Premio[])
    );
  }
}

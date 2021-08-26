import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './../modules/url.model'
@Injectable({
  providedIn: 'root'
})
export class ServicePokemonService {

  url:string;

  constructor(private http:HttpClient) {
    this.url = url;
   }
   getPokemon(name:string):Observable<any>{
    return this.http.get(this.url+name);
  }
}

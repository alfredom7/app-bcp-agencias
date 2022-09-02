import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agencia } from '../models/agencia.model';
//import * as data from "./data.json";

@Injectable({
  providedIn: 'root'
})
export class AgenciasService {

  constructor(private http: HttpClient) {} 

  get_agencias(){
      return this.http.get<Agencia[]>('../assets/data.json')
  }

  ordenar_agencias(agencias: Agencia[]) {
    agencias.sort(function (a, b) {
    if (a.agencia > b.agencia) {
      return 1;
    }
    if (a.agencia < b.agencia) {
      return -1;
    }
    // a must be equal to b
      return 0;
    });
    return agencias;
  }
}

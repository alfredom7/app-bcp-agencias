import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencia } from 'src/app/models/agencia.model';
import { AgenciasService } from "../../services/agencias.service"

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.scss']
})
export class AgenciasComponent implements OnInit {

  constructor(private agenciasService: AgenciasService, private router: Router) { }

  agencias: Agencia[] = [];
  showBusqueda: boolean = false;
  searchText: string = '';

  ngOnInit(): void {
    let localAgencias = localStorage.getItem('agencias');
    if (localAgencias !== undefined && localAgencias) {
      // En este caso ya existen las agencias en la localStorage
      let data = JSON.parse(localStorage.getItem('agencias') || '{}');
      let ordenarAgencias = this.agenciasService.ordenar_agencias(data);
      ordenarAgencias.forEach((ag: Agencia) => {
        this.agencias.push(ag);
      });
      
    } else {
      this.agenciasService.get_agencias()
        .subscribe(data => {
          let ordenarAgencias = this.agenciasService.ordenar_agencias(data);
          localStorage.setItem('agencias', JSON.stringify(ordenarAgencias));
          ordenarAgencias.forEach((ag: Agencia) => {
            this.agencias.push(ag);
          });
        });
    }
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  favorito(agenciaId: number){
    let data = JSON.parse(localStorage.getItem('agencias') || '{}');
    let ordenarAgencias = this.agenciasService.ordenar_agencias(data);
    this.agencias = [];
    ordenarAgencias.forEach((ag: Agencia) => {
      if(ag.id === agenciaId) ag.favorite = !ag.favorite;
      this.agencias.push(ag);
    });
    localStorage.removeItem('agencias');
    localStorage.setItem('agencias', JSON.stringify(this.agencias));
  }

  mostrarBusqueda(){
    this.showBusqueda = !this.showBusqueda;
  }
}

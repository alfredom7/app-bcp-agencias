import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from 'src/app/models/agencia.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.idAgencia = 0;
   }
  
  showMap: boolean = false;
  idAgencia: number;
  dataAgencia: Agencia;
  nombreAgencia: string = '';
  direccionAgencia: string = '';
  distritoAgencia: string = '';
  latitudAgencia: number = 0;
  longitudAgencia: number = 0;

  //Manejadores del Mapa
  center: google.maps.LatLngLiteral = {
    lat: this.latitudAgencia,
    lng: this.longitudAgencia
  };
  zoom = 10;
  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [this.center];

  ngOnInit(): void {
    localStorage.removeItem('agencia');
    const agenciaId = this.route.snapshot.paramMap.get('id');
    localStorage.setItem('agencia', JSON.stringify(agenciaId));
    this.idAgencia = Number(agenciaId);
    this.getAgencia(this.idAgencia);
  }

  getAgencia(id: number){
    let localAgencias = localStorage.getItem('agencias');
    if (localAgencias !== undefined && localAgencias) {
        let data = JSON.parse(localAgencias || '{}');
        data.forEach((ag: Agencia) => {
          if(ag.id === id){
            this.dataAgencia = ag;
            this.nombreAgencia = ag.agencia;
            this.direccionAgencia = ag.direccion;
            this.distritoAgencia = ag.distrito;
            this.latitudAgencia = Number(ag.lat);
            this.longitudAgencia = Number(ag.lon);
            this.loadMap(ag);
          }
        }); 
    } else {
      this.router.navigate(['/agencias']);
    }
  }

  actualizarAgencia(){
    let localAgencias = localStorage.getItem('agencias');
    if (localAgencias !== undefined && localAgencias) {
        let data = JSON.parse(localAgencias || '{}');
        const agencia = data.find((ag: Agencia) => ag.agencia === this.dataAgencia.agencia);
        data.slice(this.idAgencia, 1);
        const agenciasFiltradas = data.filter((ag: Agencia) => ag.agencia !== this.dataAgencia.agencia)
        agenciasFiltradas.push({
          id: agencia.id,
          agencia: this.nombreAgencia,
          direccion: this.direccionAgencia,
          distrito: this.distritoAgencia,
          provincia: agencia.provincia,
          departamento: agencia.departamento,
          lat: this.latitudAgencia,
          lon: this.longitudAgencia
        });
        localStorage.removeItem('agencias');
        localStorage.setItem('agencias', JSON.stringify(agenciasFiltradas));
         
         
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Los cambios han sido guardados',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {  
            this.router.navigate(['agencias']);
        });
    }
  }
  loadMap(ag: Agencia){
    this.markerPositions = [];
    this.markerPositions.push({
      lat: ag.lat,
      lng: ag.lon
    });
    this.center =  {
      lat: ag.lat,
      lng: ag.lon
    };
    setTimeout(() => {
      this.showMap = true;
      
    }, 500);
  }

  addMarker(event: google.maps.MapMouseEvent) {
    
      if (event.latLng != null) {
        const position = event.latLng.toJSON();
        this.latitudAgencia = position.lat;
        this.longitudAgencia = position.lng;
        this.markerPositions = [];
        this.markerPositions.push(position);
      }
  }
}

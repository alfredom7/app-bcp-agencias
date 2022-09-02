import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router ) {
    this.loading = true;
  }

  loading: boolean;

  ngOnInit(): void {
    setTimeout(()=>{
      // Simular cambio de estado del loading
      this.loading = false;
      //Redirigir a la pantalla del listado de agencias
      this.router.navigate(['/agencias']);
    }, 2000)
  }

}

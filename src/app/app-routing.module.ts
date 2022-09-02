import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'agencias', component: AgenciasComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

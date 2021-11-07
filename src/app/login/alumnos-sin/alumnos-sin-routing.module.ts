import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosSinPage } from './alumnos-sin.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosSinPage
  },
  {
    path: 'detalle-alumno-sin',
    loadChildren: () => import('./detalle-alumno-sin/detalle-alumno-sin.module').then( m => m.DetalleAlumnoSinPageModule)
  },
  {
    path: 'registrar-alumno-sin',
    loadChildren: () => import('./registrar-alumno-sin/registrar-alumno-sin.module').then( m => m.RegistrarAlumnoSinPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosSinPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosPage } from './alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosPage
  },
  {
    path: 'detalle-alumno',
    loadChildren: () => import('./detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
  },
  {
    path: 'registrar-alumno',
    loadChildren: () => import('./registrar-alumno/registrar-alumno.module').then( m => m.RegistrarAlumnoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosPageRoutingModule {}

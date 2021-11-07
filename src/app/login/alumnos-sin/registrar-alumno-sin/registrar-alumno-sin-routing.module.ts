import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarAlumnoSinPage } from './registrar-alumno-sin.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarAlumnoSinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarAlumnoSinPageRoutingModule {}

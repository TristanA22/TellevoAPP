import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'registra-usuario',
    loadChildren: () => import('./registra-usuario/registra-usuario.module').then( m => m.RegistraUsuarioPageModule)
  },
  {
    path: 'alumnos-sin',
    loadChildren: () => import('./alumnos-sin/alumnos-sin.module').then( m => m.AlumnosSinPageModule)
  },
  {
    path: 'r-password',
    loadChildren: () => import('./r-password/r-password.module').then( m => m.RPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}

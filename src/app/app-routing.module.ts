import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alumnos',
    children : [
      {
        path: '',
        loadChildren: () => import('./login/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path: ':alumnoId',
        loadChildren: () => import('./login/alumnos/detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
      }
    ]
  },

  {
    path: 'alumnos-sin',
    children : [
      {
        path: '',
        loadChildren: () => import('./login/alumnos-sin/alumnos-sin.module').then( m => m.AlumnosSinPageModule)
      },
      {
        path: ':alumnosinId',
        loadChildren: () => import('./login/alumnos-sin/detalle-alumno-sin/detalle-alumno-sin.module').then( m => m.DetalleAlumnoSinPageModule)
      } 
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar-alumno',
    loadChildren: () => import('./login/alumnos/registrar-alumno/registrar-alumno.module').then( m => m.RegistrarAlumnoPageModule)
  },
  {
    path: 'registrar-alumno-sin',
    loadChildren: () => import('./login/alumnos-sin/registrar-alumno-sin/registrar-alumno-sin.module').then( m => m.RegistrarAlumnoSinPageModule)
  },
  {
    path: 'registra-usuario',
    loadChildren: () => import('./login/registra-usuario/registra-usuario.module').then( m => m.RegistraUsuarioPageModule)
  },
  {
    path: 'r-password',
    loadChildren: () => import('./login/r-password/r-password.module').then( m => m.RPasswordPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

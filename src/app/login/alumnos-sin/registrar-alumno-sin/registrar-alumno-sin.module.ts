import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAlumnoSinPageRoutingModule } from './registrar-alumno-sin-routing.module';

import { RegistrarAlumnoSinPage } from './registrar-alumno-sin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAlumnoSinPageRoutingModule
  ],
  declarations: [RegistrarAlumnoSinPage]
})
export class RegistrarAlumnoSinPageModule {}

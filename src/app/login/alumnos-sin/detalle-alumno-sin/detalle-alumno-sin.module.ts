import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAlumnoSinPageRoutingModule } from './detalle-alumno-sin-routing.module';

import { DetalleAlumnoSinPage } from './detalle-alumno-sin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAlumnoSinPageRoutingModule
  ],
  declarations: [DetalleAlumnoSinPage]
})
export class DetalleAlumnoSinPageModule {}

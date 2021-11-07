import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosSinPageRoutingModule } from './alumnos-sin-routing.module';

import { AlumnosSinPage } from './alumnos-sin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosSinPageRoutingModule
  ],
  declarations: [AlumnosSinPage]
})
export class AlumnosSinPageModule {}

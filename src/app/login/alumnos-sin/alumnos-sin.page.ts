import { Component, OnInit } from '@angular/core';
import { AlumnosSinService } from './alumnos-sin.service';
import { AlumnoSin } from './alumno-sin.model';

@Component({
  selector: 'app-alumnos-sin',
  templateUrl: './alumnos-sin.page.html',
  styleUrls: ['./alumnos-sin.page.scss'],
})
export class AlumnosSinPage implements OnInit {
  listaAlumnosSIN  =[];

  constructor( private alumnosinService: AlumnosSinService
    ) {}
 ngOnInit() {
   this.listaAlumnosSIN=this.alumnosinService.getAlumnos();
   
 }
 
}


import { Component, OnInit } from '@angular/core';
import { AlumnosService } from './alumnos.service';
import { Alumno} from './alumno.model';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  listaAlumnosCON  =[];

  constructor( private alumnoService: AlumnosService
    ) {}
 ngOnInit() {
   this.listaAlumnosCON=this.alumnoService.getAlumnos();
   
 }
 
}



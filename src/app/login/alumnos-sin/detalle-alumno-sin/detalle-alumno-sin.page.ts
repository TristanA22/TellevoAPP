import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoSin } from '../alumno-sin.model';
import { AlumnosSinService } from '../alumnos-sin.service';

@Component({
  selector: 'app-detalle-alumno-sin',
  templateUrl: './detalle-alumno-sin.page.html',
  styleUrls: ['./detalle-alumno-sin.page.scss'],
})
export class DetalleAlumnoSinPage implements OnInit {

  alumno: AlumnoSin;

  constructor(private activateRoute: ActivatedRoute, 
    private alumnosinService: AlumnosSinService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap=>{
        const idAlumnoRecibido=paramMap.get('alumnosinId');
        this.alumno=this.alumnosinService.getAlumno(idAlumnoRecibido);
      }
    );
  }

}

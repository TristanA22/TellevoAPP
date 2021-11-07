import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno} from '../alumno.model';
import { AlumnosService} from '../alumnos.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {
alumno: Alumno;

  constructor(private activateRoute: ActivatedRoute, 
    private alumnoService: AlumnosService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap=>{
        const idAlumnoRecibido=paramMap.get('alumnoId');
        this.alumno=this.alumnoService.getAlumno(idAlumnoRecibido);
      }
    );
  }

}

import { Injectable } from '@angular/core';
import { AlumnosPage } from './alumnos.page';
import { Alumno} from './alumno.model';
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

    listaAlumnosCON : Alumno[]=[
      {
        id :"1",
        nombre:"Juan",
        apellidos:"Pérez Gómez",
        domicilio:" Calle Siempre Viva 742",
        fono:"+56912344321",
        movilizacion:"SI",
        horario_salida:"15:40 PM",
        costoxpersona:"$ 3500",
        destino:"Renca",
        email:"jpg@gmail.com"
      },
      {
      id :"2",
      nombre:"Erich  ",
      apellidos:" Irwin	Brown",
      domicilio:" 266-110 Torquent Ave",
      fono:"+07624 287988",
      movilizacion:"SI",
      horario_salida:"13:00 PM",
      costoxpersona:"$ 6000",
      destino:" Deleon",
      email:"sed@molestietortornibh.net"
    },

    {
      id :"3",
      nombre:"Trevor  ",
      apellidos:"Walton	Reilly",
      domicilio:" 	5988 Mollis. Ave",
      fono:"+0800 802793",
      movilizacion:"SI",
      horario_salida:"10:00 AM",
      costoxpersona:"$ 8000",
      destino:" Nguyen",
      email:"felis@cursusvestibulummauris.c"
    },
    {
      id :"4",
      nombre:"Walker  ",
      apellidos:"Hyde	Hanson",
      domicilio:" CAp #851-9482 Sed Road",
      fono:"+	0800 802793",
      movilizacion:"SI",
      horario_salida:"12:00 AM",
      costoxpersona:"$ 6500",
      destino:" Lloyd",
      email:"	ipsum@egetmagna.org"
    },
    {
      id :"5",
      nombre:"Brenden  ",
      apellidos:"Cherry	Talley",
      domicilio:"	2513 Phasellus Rd.",
      fono:"+	(016977) 1874	",
      movilizacion:"SI",
      horario_salida:"18:00 PM",
      costoxpersona:"$ 3000",
      destino:"Moss",
      email:"msilva@gmail.com"
    },
    {
      id :"6",
      nombre:"Travis   ",
      apellidos:"Molina	Mays",
      domicilio:" 359-3201 Non Street",
      fono:"+	0885 648 1407",
      movilizacion:"SI",
      horario_salida:"22:00 PM",
      costoxpersona:"$ 8000",
      destino:" 	Foley",
      email:"nunc.risus@euismod.net"
    }
  ];
  
  constructor() {}

  getAlumnos()
  {
     return [...this.listaAlumnosCON];
  }

getAlumno(alumnoId: string)
  {
    return {
            ...this.listaAlumnosCON.find(alumno => {return alumno.id === alumnoId })
           }
  }
  addAlumno(nombre: string, apellidos: string, domicilio: string,email: string, fono: string, movilizacion: string,
    horario_salida: string, costoxpersona: string, destino:string)
  {
    this.listaAlumnosCON.push(
      {
        id: this.listaAlumnosCON.length+1+'',
        nombre,
        apellidos,
        domicilio,
        fono,
        movilizacion,
        horario_salida,
        costoxpersona,
        destino,
        email
      }
    );
  }

  deleteAlumno(alumnoId: string)
  {
    this.listaAlumnosCON=this.listaAlumnosCON.filter(alumno => {return alumno.id !== alumnoId  });
  }  
}



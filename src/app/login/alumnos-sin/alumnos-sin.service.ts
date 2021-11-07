import { Injectable } from '@angular/core';
import { AlumnosSinPage } from './alumnos-sin.page';
import {AlumnoSin} from './alumno-sin.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosSinService {

  listaAlumnosSIN : AlumnoSin[]=[
    {
      id :"1",
      nombre:"Catalina",
      apellidos:"SairaF McQueen",
      domicilio:" La mejor poblacion",
      fono:"+56912344321",
      movilizacion:"No Tengo",
      horario_salida:"17:15 PM",
      costoxpersona:"$ 3500",
      destino:"Renca",
      email:"jpg@gmail.com"
    },
    {
    id :"2",
    nombre:"Yaritza  ",
    apellidos:"Pinochet Huachuyanca",
    domicilio:"De menor 666",
    fono:"+5698761234",
    movilizacion:"NO TENGO",
    horario_salida:"12:00 AM",
    costoxpersona:"$ 5000",
    destino:" El Bosque",
    email:"msilva@gmail.com"
  },

  {
    id :"3",
    nombre:"Yulissa  ",
    apellidos:"Rojas Diaz",
    domicilio:"San Luis",
    fono:"+5698761234",
    movilizacion:"NO TENGO",
    horario_salida:"09:00 AM",
    costoxpersona:"$ 8000",
    destino:" Conchali",
    email:"msilva@gmail.com"
  },
  
  {
    id :"4",
    nombre:"Yetta  ",
    apellidos:"Muñoz Oconnor",
    domicilio:" Camarones",
    fono:"+5698761234",
    movilizacion:"NO TENGO",
    horario_salida:"11:00 AM",
    costoxpersona:"$ 5000",
    destino:" Nueva Renca",
    email:"sed.nunc@necurnaet.ca"
  },

    
  {
    id :"5",
    nombre:"Blaze   ",
    apellidos:"Washignton Oconnor",
    domicilio:" São João de Meriti",
    fono:"+397-6594",
    movilizacion:"NO TENGO",
    horario_salida:"11:00 AM",
    costoxpersona:"$ 5000",
    destino:" Brazil",
    email:"tristique@senectus.ca"
  },

  {
    id :"5",
    nombre:"Breanna   ",
    apellidos:"Randolph	Wilder",
    domicilio:" 968-1584 Phasellus Rd",
    fono:"+397-6594",
    movilizacion:"NO TENGO",
    horario_salida:"11:00 AM",
    costoxpersona:"$ 5000",
    destino:" 	Perkins",
    email:"maecenas.iaculis@lacus.org"
  },

  {
    id :"6",
    nombre:"Dennis   ",
    apellidos:"Carr  Oconnor",
    domicilio:" 8091 Morbi St.",
    fono:"+070 1142 6623",
    movilizacion:"NO TENGO",
    horario_salida:"11:00 AM",
    costoxpersona:"$ 5000",
    destino:"	Nolan",
    email:"placerat@diamdictum.org"
  }
  



];

constructor() {}

getAlumnos()
{
   return [...this.listaAlumnosSIN];
}

getAlumno(alumnoId: string)
{
  return {
          ...this.listaAlumnosSIN.find(alumno => {return alumno.id === alumnoId })
         }
}
addAlumno(nombre: string, apellidos: string, domicilio: string,email: string, fono: string, movilizacion: string,
  horario_salida: string, costoxpersona: string, destino:string)
{
  this.listaAlumnosSIN.push(
    {
      id: this.listaAlumnosSIN.length+1+'',
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
  this.listaAlumnosSIN=this.listaAlumnosSIN.filter(alumno => {return alumno.id !== alumnoId  });
}  
}



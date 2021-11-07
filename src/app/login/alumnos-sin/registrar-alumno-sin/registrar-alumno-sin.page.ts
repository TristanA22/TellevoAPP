import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlumnosSinService } from '../alumnos-sin.service';

@Component({
  selector: 'app-registrar-alumno-sin',
  templateUrl: './registrar-alumno-sin.page.html',
  styleUrls: ['./registrar-alumno-sin.page.scss'],
})
export class RegistrarAlumnoSinPage implements OnInit {
  alumno={
    nombre:'',
    apellidos:'',
    domicilio:'',
    fono:'',
    movilizacion:'',
    horario_salida:'',
    costoxpersona:'',
    destino:'',
    email:'',
    
  };

  campo: string;
  constructor(private router: Router,public toastController: ToastController,
    private contactoService: AlumnosSinService) { }

  ngOnInit() {
  }
  registrarAlumno(){
    // Se declara e instancia un elemento de tipo NavigationExtras
    if(this.validateModel(this.alumno)){
        this.contactoService.addAlumno(this.alumno.nombre.valueOf(),
          this.alumno.apellidos.valueOf(),
          this.alumno.domicilio.valueOf(),
          this.alumno.fono.valueOf(),
          this.alumno.movilizacion.valueOf(),
          this.alumno.horario_salida.valueOf(),
          this.alumno.costoxpersona.valueOf(),
          this.alumno.destino.valueOf(),
          this.alumno.email.valueOf());
          this.presentToast('Datos registrados correctamente');
    }
    else
    {
      this.presentToast('Falta completar: '+this.campo);
    }

  }
   /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
    async presentToast(message: string, duration?: number){
      const toast = await this.toastController.create(
        {
          message,
          duration:duration?duration:2000
        }
      );
      toast.present();
    }
  /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
    validateModel(model: any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value==='') {
        // Se asigna el campo faltante
        this.campo=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { RegistraUsuarioPage } from './registra-usuario.page';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuario: Usuario[]=[
    {
      nombre: 'Marcelo',
      apellidos:'Montecinos',
      usuario: 'mmonte',
      password: '123456'
    },
];
  constructor() {
  }
  getUsuario(usuarioInput: string)
  {
    return {
            ...this.listaUsuario.find(usuario => {return usuario.usuario === usuarioInput })
           }
    }
  addUsuario(nombre: string, apellidos: string, usuario: string, password: string)
  {
    this.listaUsuario.push(
      {
        nombre,
        apellidos,
        usuario,
        password
      
      }
    );
  }
}
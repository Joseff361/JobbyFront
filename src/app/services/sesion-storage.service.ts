import { Injectable } from '@angular/core';
import { UsuarioDto } from '../shared/Dto/UsuarioDto';

const ID_KEY = 'Id';
const CORREO_KEY = 'Username';
const CONTRASENIA_KEY = 'Password';

@Injectable({
  providedIn: 'root'
})
export class SesionStorageService {

  constructor() { }

  public guardarCredenciales(usuarioDto: UsuarioDto): void{
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.removeItem(CORREO_KEY);
    window.sessionStorage.removeItem(CONTRASENIA_KEY);

    window.sessionStorage.setItem(ID_KEY, usuarioDto.id.toString());   
    window.sessionStorage.setItem(CORREO_KEY, usuarioDto.correo);   
    window.sessionStorage.setItem(CONTRASENIA_KEY, usuarioDto.contrasenia);   
  }

  public obtenerId(): string {
    return sessionStorage.getItem(ID_KEY);
  }

  public obtenerCorreo(): string {
    return sessionStorage.getItem(CORREO_KEY);
  }

  public obtenerContrasenia(): string {
    return sessionStorage.getItem(CONTRASENIA_KEY);
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}

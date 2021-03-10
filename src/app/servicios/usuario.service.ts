import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { accesoUsuario, Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';

const url = 'http://127.0.0.1:8000/usuarios'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  login(usuario: accesoUsuario): Observable<any> {
    return this.http.post(url + "/login", usuario)
  }

  obtenerUsuario(): Observable<any> {
    return this.http.get(url)
  }

  guardarToken(token: string) {
    console.log('token guardado')
    localStorage.setItem('userToken', token)
  }

  leerToken(): string {
    return localStorage.getItem('userToken')
  }

  isLogged(): boolean {
    return !!localStorage.getItem('userToken')
  }

  logOut(): void {
    localStorage.removeItem('userToken')
  }

}

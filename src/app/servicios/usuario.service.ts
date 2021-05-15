import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { accesoUsuario, Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';
import { Plataforma } from '../clases/plataforma';

const url = 'http://127.0.0.1:8000/usuarios'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  login(usuario: accesoUsuario): Observable<any> {
    return this.http.post(url + "/login", usuario)
  }

  registrar(usuario: Usuario): Observable<any> {
    return this.http.post(url + "/registrar", usuario)
  }

  obtenerUsuario(): Observable<any> {
    return this.http.get(url)
  }

  editarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(url, usuario)
  }

  eliminarUsuario(): Observable<any> {
    return this.http.delete(url)
  }

  updatePlataformas(plataformas: Plataforma): Observable<any> {
    return this.http.put(url + "/plataformas", plataformas);
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

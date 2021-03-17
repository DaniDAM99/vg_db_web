import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../clases/juego';

const url = 'http://127.0.0.1:8000/juegos'

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private http:HttpClient) { 
  }

  obtenerJuegos(): Observable<any> {
    return this.http.get(url)
  }

  obtenerJuego(id: number): Observable<any> {
    return this.http.get(url + "/" + id)
  }

  insertarJuego(juego: Juego): Observable<any> {
    return this.http.post(url, juego)
  }
}

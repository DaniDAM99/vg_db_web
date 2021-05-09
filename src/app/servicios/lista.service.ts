import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from '../clases/lista';

const url = 'http://127.0.0.1:8000/listas'

@Injectable({
  providedIn: 'root'
})

export class ListaService {

  constructor(private http:HttpClient) { }

  obtenerListas(): Observable<any> {
    return this.http.get(url)
  }

  eliminarLista(id): Observable<any> {
    return this.http.delete(url + "/" + id)
  }

  insertarLista(lista: Lista): Observable<any> {
    return this.http.post(url, lista)
  }

  obtenerLista(id: number): Observable<any> {
    return this.http.get(url + "/" + id);
  }
}

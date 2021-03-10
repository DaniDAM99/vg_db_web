import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private servicioUsuario:UsuarioService, private irHacia:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let peticion = request;
    if (this.servicioUsuario.isLogged()){
      peticion = request.clone({
        setHeaders: {Authorization: this.servicioUsuario.leerToken()}
      })
    }

    return next.handle(peticion).pipe(
      catchError((err: HttpErrorResponse)=>{
        if (err.status===401){
          //this.servicioUsuario.logOut()
          this.irHacia.navigate(['/login'])
        }
        return throwError(err)
      })
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private servicioUsuario:UsuarioService, private irHacia:Router) { }

  ngOnInit(): void {
  }

  isLogged():boolean {
    return this.servicioUsuario.isLogged()
  }

  logout() {
    this.servicioUsuario.logOut()
    this.irHacia.navigate(['/login'])
  }

}

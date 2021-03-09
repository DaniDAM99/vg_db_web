import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private servicioUsuario: UsuarioService) { }

  usuario: Usuario

  ngOnInit(): void {
    this.getUsuario()
  }
// NO FUNCIONA AL LOGUEARSE 
  getUsuario() {
    this.servicioUsuario.obtenerUsuario().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuario = respuesta
      },
      error => console.log(error)
    )
  }

}

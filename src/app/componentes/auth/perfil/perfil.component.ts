import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private fb:FormBuilder, private servicioUsuario: UsuarioService) { }

  usuario: Usuario = {}

  edit = false;

  
  formUpdate = this.fb.group({
    username:['', ],
    password:['', Validators.minLength(4)],
    password2:['', Validators.minLength(4)],
  })
  
  ngOnInit(): void {
    this.getUsuario()
  }
  
  getUsuario() {
    this.servicioUsuario.obtenerUsuario().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuario = respuesta
      },
      error => console.log(error)
    )
  }

  editar() {
    if(this.formUpdate.get('password').value == this.formUpdate.get('password2').value) {
      const user: Usuario = new Usuario
      user.username = this.formUpdate.get('username').value;
      user.password = this.formUpdate.get('password').value;
      
      this.servicioUsuario.editarUsuario(user).subscribe(
        respuesta => {
          console.log(respuesta)
          this.getUsuario()
          this.edit = false
        },
        error => console.log(error)
      )
    }
  }

  eliminar() {
    this.servicioUsuario.eliminarUsuario().subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.logOut()
      },
      error => console.log(error)
    )
  }

}

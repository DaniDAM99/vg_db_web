import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private servicioUsuario:UsuarioService, private irHacia:Router) { }

  error = undefined

  formLogin = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })

  ngOnInit(): void {
  }

  login() {
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta.token);
        this.irHacia.navigate(["/perfil"])
      },
      error => {
        console.log(error)
        this.error = error.error.error
      }
    )
  }
}

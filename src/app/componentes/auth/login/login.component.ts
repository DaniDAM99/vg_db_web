import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private servicioUsuario:UsuarioService) { }

  formLogin = this.fb.group({
    email:[''],
    password:['']
  })

  ngOnInit(): void {
  }

  login() {
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta.token);
      },
      error => console.log(error)
    )
  }

}

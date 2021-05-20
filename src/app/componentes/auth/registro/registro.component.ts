import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb:FormBuilder, private servicioUsuario:UsuarioService, private irHacia:Router) { }

  formRegister = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    username:['', Validators.required],
    provincia:['', Validators.required],
    password:['', [Validators.required, Validators.minLength(4)]],
    password2:['', [Validators.required]],
  })

  provincias: string[] = ['Albacete', 'Ciudad Real', 'Cuenca', 'Guadalajara', 'Toledo', 'Álava ', 'Alicante ', 'Almería ', 'Asturias ', 'Ávila', 'Badajoz', 'Islas Baleares', 'Barcelona ', 'Burgos ', 'Cáceres ', 'Cádiz ', 'Cantabria ', 'Castellón ', 'Ceuta ', 'Córdoba ', 'La Coruña ', 'Gerona ', 'Granada ', 'Guipúzcoa ', 'Huelva ', 'Huesca ', 'Jaén ', 'La Rioja ', 'León ', 'Lérida ', 'Lugo ', 'Madrid ', 'Málaga ', 'Melilla ', 'Murcia ', 'Navarra ', 'Orense ', 'Palencia ', 'Las Palmas ', 'Pontevedra ', 'Salamanca ', 'Santa Cruz de Tenerife ', 'Segovia ', 'Sevilla ', 'Soria ', 'Tarragona ', 'Teruel ', 'Valencia ', 'Valladolid ', 'Vizcaya ', 'Zamora ', 'Zaragoza']

  ngOnInit(): void {
  }

  registrar() {
    this.servicioUsuario.registrar(this.formRegister.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.irHacia.navigate(["/login"])
      },
      error => console.log(error)
    )
  }

}

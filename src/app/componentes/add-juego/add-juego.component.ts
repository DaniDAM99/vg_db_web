import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JuegoService } from 'src/app/servicios/juego.service';

@Component({
  selector: 'app-add-juego',
  templateUrl: './add-juego.component.html',
  styleUrls: ['./add-juego.component.css']
})
export class AddJuegoComponent implements OnInit {

  constructor(private fb:FormBuilder, private servicioJuego: JuegoService, private irHaci:Router) { }

  error = undefined
  mensaje = undefined

  formInsertar = this.fb.group({
    nombre:['', Validators.required],
    fecha_lanzamiento:['', Validators.required],
    genero:['', Validators.required],
    plataforma:['', Validators.required],
  })

  ngOnInit(): void {
  }

  insertarJuego() {
    this.servicioJuego.insertarJuego(this.formInsertar.value).subscribe(
      respuesta => {
        console.log(respuesta.respuesta)
        this.mensaje = respuesta.respuesta
      }, 
      error => {
        console.log(error)
        this.error = error.error.error;
        
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Lista } from 'src/app/clases/lista';
import { ListaService } from 'src/app/servicios/lista.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  constructor(private servicioLista: ListaService, private fb:FormBuilder, private irHacia:Router) { }
  listas: Lista[] = []

  ngOnInit(): void {
    this.getListas()
  }

  mostrarForm: boolean = false;

  error = undefined
  mensaje = undefined

  formInsertar = this.fb.group({
    titulo:['', Validators.required],
  })

  getListas() {
    this.servicioLista.obtenerListas().subscribe(
      respuesta => {
        console.log(respuesta)
        this.listas = respuesta
      },
      error => console.log(error)
    )
  }

  ver_lista(id) {
    this.irHacia.navigate(["/lista/" + id]);
  }

  eliminarLista(id) {
    console.log(id)
    this.servicioLista.eliminarLista(id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensaje = respuesta.respuesta
        this.getListas()
      }
    ), 
    error => {
      console.log(error)
      this.error = error.error.error;
    }
  }

  insertarLista() {
    this.servicioLista.insertarLista(this.formInsertar.value).subscribe(
      respuesta => { 
        console.log(respuesta)
        this.mensaje = respuesta.respuesta
        this.getListas()
      },
      error => {
        console.log(error)
        this.error = error.error.error;
      }
    )
  }
}

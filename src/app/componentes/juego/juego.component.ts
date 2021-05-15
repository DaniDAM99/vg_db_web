import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/clases/juego';
import { Lista } from 'src/app/clases/lista';
import { JuegoService } from 'src/app/servicios/juego.service';
import { ListaService } from 'src/app/servicios/lista.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private servicioJuego: JuegoService, private servicioListas: ListaService, private irHacia:Router) { }

  id: number
  idLista: number = 0
  juego: Juego = {}
  listas: Lista[] = []
  error = undefined
  mensaje = undefined

  ngOnInit(): void {
    this.id = parseInt(this.rutaActiva.snapshot.paramMap.get("id"));
    if(!isNaN(this.id)) {
      console.log(this.id)
      this.getJuego();
    }
    this.getListas()
  }

  getJuego() {
    this.servicioJuego.obtenerJuego(this.id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.juego = respuesta
      },
      error => console.log(error)
      
    )
  }

  getListas() {
    this.servicioListas.obtenerListas().subscribe(
      respuesta => {
        console.log(respuesta)
        this.listas = respuesta
      },
      error => {
        console.log(error)
      }
    )
  }

  anadirALista() {
    if(this.idLista != null) {
      this.servicioJuego.anadirALista(this.id, this.idLista).subscribe(
        respuesta => {
          console.log(respuesta)
          this.mensaje = respuesta.respuesta
        },
        error => {
          console.log(error)
          this.error = error.error.error
        }
      )
    }
  }
}

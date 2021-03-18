import { Component, OnInit, ViewChild } from '@angular/core';
import { Juego } from 'src/app/clases/juego';
import { JuegoService } from 'src/app/servicios/juego.service';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servicioJuegos: JuegoService, private irHacia:Router) { }

  juegos: Juego[] = []
  juegosMostrar: Juego[] = []
  busqueda: string
  temporizador: any = null

  ngOnInit(): void {
    this.obtenerJuegos()
  }

  obtenerJuegos() {
    this.servicioJuegos.obtenerJuegos().subscribe(
      respuesta => {
        console.log(respuesta)
        this.juegos = respuesta
        this.juegosMostrar = respuesta
      },
      error => console.log(error)
    )
  }

  ver_juego(id) {
    this.irHacia.navigate(["/juego/" + id]);
  }

  buscarConRetraso() {
    if(this.temporizador == null) {
      this.temporizador = setTimeout(() => {
        this.buscarJuego()
        this.temporizador=null
      }, 1500)
    }
  }

  buscarJuego() {
    this.juegosMostrar = this.juegos.filter(juego => juego.nombre.includes(this.busqueda))
    console.log(this.juegosMostrar)
  }

}

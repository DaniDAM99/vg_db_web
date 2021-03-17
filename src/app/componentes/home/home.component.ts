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

  ngOnInit(): void {
    this.obtenerJuegos()
  }

  obtenerJuegos() {
    this.servicioJuegos.obtenerJuegos().subscribe(
      respuesta => {
        console.log(respuesta)
        this.juegos = respuesta
      },
      error => console.log(error)
    )
  }

  ver_juego(id) {
    this.irHacia.navigate(["/juego/" + id]);
  }

}

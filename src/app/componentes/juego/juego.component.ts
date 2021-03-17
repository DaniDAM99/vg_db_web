import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from 'src/app/clases/juego';
import { JuegoService } from 'src/app/servicios/juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private servicioJuego: JuegoService) { }

  id: number
  juego: Juego = {}

  ngOnInit(): void {
    this.id = parseInt(this.rutaActiva.snapshot.paramMap.get("id"));
    if(!isNaN(this.id)) {
      console.log(this.id)
      this.getJuego();
    }
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

}

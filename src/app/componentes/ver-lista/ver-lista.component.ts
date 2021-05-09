import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/clases/juego';
import { Lista } from 'src/app/clases/lista';
import { JuegoService } from 'src/app/servicios/juego.service';
import { ListaService } from 'src/app/servicios/lista.service';

@Component({
  selector: 'app-ver-lista',
  templateUrl: './ver-lista.component.html',
  styleUrls: ['./ver-lista.component.css']
})
export class VerListaComponent implements OnInit {

  id: number
  lista: Lista = {}
  juegos: Juego[] = []

  constructor(private rutaActiva: ActivatedRoute, private servicioJuego: JuegoService, private servicioListas: ListaService, private irHacia:Router) { }


  ngOnInit(): void {
    this.id = parseInt(this.rutaActiva.snapshot.paramMap.get("id"));
    if(!isNaN(this.id)) {
      console.log(this.id)
      this.getLista();
    }
  }

  getLista() {
    this.servicioListas.obtenerLista(this.id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.lista = respuesta
        this.juegos = this.lista.juegos
      },
      error => {
        console.log(error)
      }
    )
  }

  ver_juego(id) {
    this.irHacia.navigate(["/juego/" + id]);
  }

  eliminarDeLista(idJuego: number) {
    this.servicioJuego.eliminarDeLista(idJuego, this.id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.getLista()
      },
      error => {
        console.log(error)
      }
    )
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJuegoComponent } from './componentes/add-juego/add-juego.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { JuegoComponent } from './componentes/juego/juego.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "registrar", component:RegistroComponent},
  {path: "juego/:id", component:JuegoComponent},
  {path: "add_juego", component:AddJuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

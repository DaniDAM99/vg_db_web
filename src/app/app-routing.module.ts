import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "perfil", component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

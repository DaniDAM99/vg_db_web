import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { TokenInterceptorInterceptor } from './auth/token-interceptor.interceptor';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JuegoComponent } from './componentes/juego/juego.component';
import { AddJuegoComponent } from './componentes/add-juego/add-juego.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { VerListaComponent } from './componentes/ver-lista/ver-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    RegistroComponent,
    DialogComponent,
    JuegoComponent,
    AddJuegoComponent,
    ListasComponent,
    VerListaComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"}, {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

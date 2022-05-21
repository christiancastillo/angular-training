import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { ClienteService } from './clientes/cliente.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { UsuarioComponent } from './usuario/usuario.component';
import { FooterComponent } from './footer/footer.component'


const ROUTES: Routes = [
  //{path: '', redirectTo: '/clientes', pathMatch: 'full'}, //cuando se carga la pagina por default entramos aqui
  {path: 'clientes', component: ClientesComponent},
  {path: 'usuario', component: UsuarioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    UsuarioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule, //arreglo de rutas
    MatSliderModule
  ],
  exports: [
    MatSliderModule
  ],
  providers: [ClienteService], //servicios se van a incluir en la app, se pueden incluir con comas
  bootstrap: [AppComponent]
})
export class AppModule { }

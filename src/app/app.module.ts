import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceCubos } from './services/service.cubos';
import { CubodetallesComponent } from './components/cubodetalles/cubodetalles.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PruebaComponent,
    CubosComponent,
    LoginComponent,
    CubodetallesComponent,
    CubosmarcaComponent,
    CuboComponent,
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders, ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }

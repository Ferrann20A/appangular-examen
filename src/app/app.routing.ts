import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { CubosComponent } from "./components/cubos/cubos.component";
import { LoginComponent } from "./components/login/login.component";
import { CubosmarcaComponent } from "./components/cubosmarca/cubosmarca.component";
import { CubodetallesComponent } from "./components/cubodetalles/cubodetalles.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { PerfilComponent } from "./components/perfil/perfil.component";

const appRoutes: Routes = [
    {
        path:"", component: CubosComponent
    },
    {
        path:"login", component:LoginComponent
    },
    {
        path:"cubosmarca/:marca", component:CubosmarcaComponent
    },
    {
        path:"detalles/:idcubo", component: CubodetallesComponent
    },
    {
        path:"registro", component: RegistroComponent
    },
    {
        path:"perfil", component: PerfilComponent
    }
]

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
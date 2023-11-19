import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { PruebaComponent } from "./components/prueba/prueba.component";

const appRoutes: Routes = [
    {
        path:"", component: HomeComponent
    },
    {
        path:"prueba", component: PruebaComponent
    }
]

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
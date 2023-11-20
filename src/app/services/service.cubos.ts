import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Usuario } from "../models/Usuario";
import { User } from "../models/User";

@Injectable()
export class ServiceCubos{
    constructor(private _http:HttpClient){}
    getCubos():Observable<any>{
        let request = "api/cubos";
        let url = environment.URL_ApiCubos + request;
        return this._http.get(url);
    }

    getMarcas():Observable<any>{
        let request = "api/cubos/marcas";
        let url = environment.URL_ApiCubos + request;
        return this._http.get(url);
    }

    getCubosByMarca(marca:string):Observable<any>{
        let request = `api/cubos/cubosmarca/${marca}`;
        let url = environment.URL_ApiCubos + request;
        return this._http.get(url);
    }

    getComentariosCubo(idCubo:string):Observable<any>{
        let request = `api/comentarioscubo/getcomentarioscubo/${idCubo}`;
        let url = environment.URL_ApiCubos + request;
        return this._http.get(url);
    }

    getTokenLogin(user:User):Observable<any>{
        let json = JSON.stringify(user);
        let header = new HttpHeaders().set("content-type","application/json");
        let request = "api/manage/login";
        let url = environment.URL_ApiCubos + request;
        return this._http.post(url,user,{headers:header});
    }

    nuevoUsuario(usuario:Usuario):Observable<any>{
        let json = JSON.stringify(usuario);
        let header = new HttpHeaders().set("content-type","application/json");
        let request = "api/manage/registrousuario";
        let url = environment.URL_ApiCubos + request;
        return this._http.post(url,json,{headers:header});
    }

    getPerfilUsuario(token:string):Observable<any>{
        let header = new HttpHeaders().set("Authorization",`bearer ${token}`);
        let request = "api/manage/perfilusuario";
        let url = environment.URL_ApiCubos + request;
        return this._http.get(url,{headers:header});
    }
}
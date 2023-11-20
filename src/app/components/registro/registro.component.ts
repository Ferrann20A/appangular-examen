import { Component, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public usuario!:Usuario;
  public mensaje!:string;
  public status:boolean=false;
  @ViewChild("cajaid") cajaIdRef!:ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!:ElementRef;
  @ViewChild("cajaemail") cajaEmailRef!:ElementRef;
  @ViewChild("cajapassword") cajaPasswordRef!:ElementRef;

  constructor(private _serviceCubos:ServiceCubos){}

  insertarUsuario():void{
    let idUsuario = this.cajaIdRef.nativeElement.value;
    let nombre = this.cajaNombreRef.nativeElement.value;
    let emial = this.cajaEmailRef.nativeElement.value;
    let password = this.cajaPasswordRef.nativeElement.value;
    this.usuario = new Usuario(idUsuario,nombre,emial,password);
    this._serviceCubos.nuevoUsuario(this.usuario).subscribe(response=>{
      console.log(response);
      this.status = true;
      this.mensaje = "Usuario insertado correctamente";
    })
  }
}

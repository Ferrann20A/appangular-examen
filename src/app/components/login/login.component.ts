import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/User';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user!:User;
  public mensaje:string = "";
  public status:boolean = false;
  @ViewChild("cajauser") cajaUserRef!:ElementRef;
  @ViewChild("cajapassword") cajaPasswordRef!:ElementRef;
  constructor(private _serviceCubos:ServiceCubos){}

  getToken():void{
    let email = this.cajaUserRef.nativeElement.value;
    let password = this.cajaPasswordRef.nativeElement.value;
    this.user = new User(email,password);
    this._serviceCubos.getTokenLogin(this.user).subscribe(response=>{
      localStorage.setItem("token",response.response);
      console.log(localStorage.getItem("token"));
      this.status = true;
      this.mensaje = "Te has logeado con éxito!!! Ahora puedes acceder a los apartado con seguridad."
    });
  }

}

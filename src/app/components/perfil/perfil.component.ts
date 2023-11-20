import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  public usuario!:Usuario;
  constructor(private _serviceCubos:ServiceCubos){}
  
  ngOnInit(): void {
    
  }
}

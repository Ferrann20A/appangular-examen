import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/Cubo';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css']
})
export class CubosComponent implements OnInit{
  public cubos!:Array<Cubo>;
  constructor(private _serviceCubos:ServiceCubos){}
  ngOnInit(): void {
    this._serviceCubos.getCubos().subscribe(response=>{
      this.cubos = response;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/Comentario';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubodetalles',
  templateUrl: './cubodetalles.component.html',
  styleUrls: ['./cubodetalles.component.css']
})
export class CubodetallesComponent implements OnInit{
  public comentarios:Array<Comentario> = [];
  constructor(
    private _serviceCubos:ServiceCubos,
    private _activeRoute:ActivatedRoute
  ){}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      let idcubo = parametros["idcubo"];
      this._serviceCubos.getComentariosCubo(idcubo).subscribe(response=>{
        this.comentarios = response;
      })
    })
  }
}

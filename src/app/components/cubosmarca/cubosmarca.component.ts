import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/Cubo';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css']
})
export class CubosmarcaComponent implements OnInit{
  public cubos!:Array<Cubo>;
  public marca!:string;
  constructor(
    private _serviceCubos:ServiceCubos,
    private _activeRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      this.marca = parametros["marca"];
      let marca = parametros["marca"];
      console.log(marca);
      this._serviceCubos.getCubosByMarca(marca).subscribe(response=>{
        this.cubos = response;
      })
    })
  }

}

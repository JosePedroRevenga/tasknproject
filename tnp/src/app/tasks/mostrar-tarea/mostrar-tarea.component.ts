import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mostrar-tarea',
  templateUrl: './mostrar-tarea.component.html',
  styleUrls: ['./mostrar-tarea.component.scss']
})
export class MostrarTareaComponent implements OnInit {


                              //Invocación activated root en privado para paso de id tarea

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
                            //Inicialización de parametros componente route
                            //Para poder acceder a ellos, debemos subscribirnos al observable
        this._route.params.subscribe(parametros=>{
          console.log('Parámetros: ', parametros.tid);
        })
  }

}

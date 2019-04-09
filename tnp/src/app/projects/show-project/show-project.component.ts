import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.scss']
})
export class ShowProjectComponent implements OnInit {

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {

    this._route.params.subscribe(parametros=>{
      console.log('Parámetros: ', parametros.tid);
    })
  }

}

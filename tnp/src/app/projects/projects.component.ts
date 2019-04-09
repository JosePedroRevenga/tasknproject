import { Component, OnInit } from '@angular/core';
import { Project } from '../modelos/project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = null;
  filtroId:number;
  filtroTexto = '';
  
  filtrarProject(filtroTexto, filtroId){

    return this.projects.filter(function (busqueda){
      const texto = (busqueda.title.toLowerCase().indexOf(filtroTexto.toLowerCase()) >= 0);
      const id = parseInt(filtroId)?busqueda.pid===parseInt(filtroId):true;
      
      return texto && id;
    })
   };

  constructor() { }

  ngOnInit() {

    this.projects = [
      new Project(1, 'Primer proyecto'),
      new Project(2, 'Segundo proyecto'),
      new Project(3, 'Tercer proyecto')
      ];
  }

}

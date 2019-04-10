import { Component, OnInit } from '@angular/core';
import { Project } from '../modelos/project';
import { ProjectsService } from '../servicios/projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = null;
  filtroId:number;
  filtroTexto = '';
 
  constructor(private _projServ:ProjectsService) { };

  ngOnInit() {

    this.projects = this._projServ.getProjects();
  };

   
  filtrarProject(filtroTexto, filtroId){

    return this.projects.filter(function (busqueda){
      const texto = (busqueda.title.toLowerCase().indexOf(filtroTexto.toLowerCase()) >= 0);
      const id = parseInt(filtroId)?busqueda.pid===parseInt(filtroId):true;
      
      return texto && id;
    })
   };


}

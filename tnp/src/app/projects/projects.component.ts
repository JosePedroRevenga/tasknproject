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

    // this.projects = this._projServ.getProjects();
    this._projServ.getProjectsFromAPI().subscribe( (dataFromAPI) => {

      return this.projects = dataFromAPI;

    });
  };

   
  filtrarProject(filtroTexto, filtroId){

                              //If()else para evitar errores a la hora de cargar inicialmente la página, ya que la variable
                              //local projects es null hasta la recepción de los datos vía getProjectsFromAPI()
    if(this.projects){

      return this.projects.filter(function (busqueda){
        const texto = (busqueda.title.toLowerCase().indexOf(filtroTexto.toLowerCase()) >= 0);
        const id = parseInt(filtroId)?busqueda.pid===parseInt(filtroId):true;
        
        return texto && id;
      });
    }else return this.projects;
   };


}

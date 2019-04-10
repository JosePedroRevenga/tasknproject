import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/servicios/projects.service';
import { Project } from 'src/app/modelos/project';


@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.scss']
})
export class ShowProjectComponent implements OnInit {

  theProject = null;
  constructor(private _route:ActivatedRoute, private _projServ: ProjectsService) { }

  ngOnInit() {

    this._route.params.subscribe(parametros=>{
      console.log('Parámetros: ', parametros.pid);
      const pid=parametros.pid;
      this.theProject = this._projServ.getProjectById(pid);
      console.log('The project: ',this.theProject);
    })
  }

}

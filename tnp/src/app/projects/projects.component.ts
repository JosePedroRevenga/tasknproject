import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [{pid: 0, title: 'Proyecto 1'}, {pid: 1, title: 'Proyecto 2'}];
  filtro = '';
  
  filtrarProject(str){

    return this.projects.filter(function(busqueda){
      return (busqueda.pid.toString().indexOf(str) >= 0);
     })
   };

  constructor() { }

  ngOnInit() {
  }

}

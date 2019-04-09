import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = null;
  filtro = '';
  
  filtrarProject(str){
    return this.projects.filter(busqueda => ((busqueda.pid.toString().indexOf(str) >= 0)));
   };

  constructor() { }

  ngOnInit() {

    this.projects = [
      {pid: 0, title: 'Proyecto 1'},
      {pid: 1, title: 'Proyecto 2'},
      {pid: 2, title: 'Proyecto 3'},
      {pid: 3, title: 'Proyecto 4'}
      ];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = [{id: 0, desc: 'Tarea 1', time: '09/04/2019', proy: 0}, {id: 1, desc: 'Tarea 2', time: '10/04/2020', proy: 1}];
  filtro = '';
  
  filtrarTask(filtro){

      return this.tasks.filter(function(busqueda){
        return (busqueda.id.toString().indexOf(filtro) >= 0);
       })
   };
  constructor() { }

  ngOnInit() {
  }

}

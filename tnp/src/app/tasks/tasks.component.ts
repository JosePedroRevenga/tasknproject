import { Component, OnInit } from '@angular/core';
import { Task } from '../modelos/task';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = null;
  filtro = '';
  filtroProy:number;
  
  filtrarTask(filtro, filtroProy){

      return this.tasks.filter(function(proyecto){
        const texto = (proyecto.desc.toLowerCase().indexOf(filtro.toLowerCase()) >= 0);
        const id = parseInt(filtroProy)?proyecto.proy===parseInt(filtroProy):true;

        return id && texto;
       })
   };
  constructor() { }

  ngOnInit() {
                                    //Inicialización array tareas
    this.tasks = [
      new Task(1, 'Tarea a', 21, 1),
      new Task(2, 'Tarea b', 21, 2),
      new Task(3, 'Tarea c', 21, 3),
      new Task(4, 'Tarea d', 21, 4)
      ];
  }

}

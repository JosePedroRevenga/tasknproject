import { Component, OnInit } from '@angular/core';
import { TasksService } from '../servicios/tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = null;
  filtro = '';
  filtroProy:number;
                                                    //Constructor
  constructor(private _tarServ:TasksService) { }

  ngOnInit() {
                                    //Inicialización array tareas
    this.tasks = this._tarServ.getTasks();
  };

  
  filtrarTask(filtro, filtroProy){

    return this.tasks.filter(function(proyecto){
      const texto = (proyecto.desc.toLowerCase().indexOf(filtro.toLowerCase()) >= 0);
      const id = parseInt(filtroProy)?proyecto.proy===parseInt(filtroProy):true;

      return id && texto;
     })
 };

}

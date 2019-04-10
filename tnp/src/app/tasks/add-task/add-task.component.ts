import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/modelos/task';
import { TasksService } from 'src/app/servicios/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
                                    
                        //Declaración variable local tipo Task
  newTask = new Task(0,null,0,0);

                        //Inyección servicio TasksService
                        //Inyección servicio Router, que nos permite jugar con direcciones y rutas
  constructor(private _tskServ:TasksService, private _router:Router) { }

  ngOnInit() {

  };
  saveNewTask(form){
                    //Se envían los datos al servicio a través del método addTask()

    // this._tskServ.addNewTask(this.newTask);
    // console.log('New task: ',this.newTask);

                    //Envío datos a API haciendo uso de un subscribe.
    this._tskServ.addNewTaskToAPI(this.newTask).subscribe(aTask =>{console.log('Respuesta post: ', aTask);});

                    //Redirigir a tareas tras respuesta positiva haciendo uso del método .navigate(['array_dirección])
                    //del servicio Router
     this._router.navigate(['/tasks'])
  };
}

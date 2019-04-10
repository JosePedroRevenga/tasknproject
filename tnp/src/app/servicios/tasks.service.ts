import { Injectable } from '@angular/core';
import { Task } from '../modelos/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private  _tasks = [
      // new Task(1, 'Tarea a', 21, 1),
      // new Task(2, 'Tarea b', 21, 2),
      // new Task(3, 'Tarea c', 21, 3),
      // new Task(4, 'Tarea d', 21, 4)
      ];

  // getTasks(){return this._tasks};
                                  //Método que recoge de la API la lista de tareas trámite HttpClient.
                                  //Se debe añadir la definición del tipo(Observable), y qué tipo de contenido
                                  //devuelve en código diamante(<Task[]>, array de Task).
  getTasksFromAPI():Observable<Task[]>{
                                  //El método GET del HttpClient necesita una url como parámetro, y los datos
                                  //contenidos en ésta deben estar en formato JSON.
                                  //Para transformar ese JSON al formato deseado se usa el código diamante "<tipo de objeto>",
                                  //indicando en su interior el tipo de objeto que concentrán (previamente definido en su servi-
                                  //cio correspondiente).

    return this._httpClient.get<Task[]>('http://www.mocky.io/v2/5cadb04c2f00002f283a96e6');

  };

  getTaskById(anid){

    return this._tasks.find(function(aTask){

      return aTask.tid==anid;
    })
  }
                              //Método para añadir nueva tarea al array local _tasks
  addNewTask(newTask: Task){

    this._tasks.push(newTask);
  };
                            //Método para enviar la nueva tarea al servidor

  addNewTaskToAPI(newTask: Task){

                            //Mediante el método .post<Modelo[]>('url', objeto)
                            
    return this._httpClient.post<Task[]>('http://www.mocky.io/v2/5cadb04c2f00002f283a96e6', newTask);

  }

  constructor(private _httpClient:HttpClient) { }
}

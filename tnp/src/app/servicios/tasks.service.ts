import { Injectable } from '@angular/core';
import { Task } from '../modelos/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private  _tasks = [
      new Task(1, 'Tarea a', 21, 1),
      new Task(2, 'Tarea b', 21, 2),
      new Task(3, 'Tarea c', 21, 3),
      new Task(4, 'Tarea d', 21, 4)
      ];

  getTasks(){return this._tasks};
                                  //Método que recoge de la API la lista de tareas trámite HttpClient
  getTasksFromAPI(){
                                  //El método GET del HttpClient necesita una url como parámetro, y los datos
                                  //contenidos en ésta deben estar en formato JSON.
                                  //Para transformar ese JSON al formato deseado se usa el código diamante "<tipo de objeto>",
                                  //indicando en su interior el tipo de objeto que concentrán (previamente definido en su servi-
                                  //cio correspondiente).
                                  
    this._httpClient.get<Task[]>('http://www.mocky.io/v2/5cadb04c2f00002f283a96e6');

  }

  getTaskById(anid){

    return this._tasks.find(function(aTask){

      return aTask.tid==anid;
    })
  }

  constructor(private _httpClient:HttpClient) { }
}

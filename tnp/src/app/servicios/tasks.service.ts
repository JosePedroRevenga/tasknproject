import { Injectable } from '@angular/core';
import { Task } from '../modelos/task';

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

  constructor() { }
}

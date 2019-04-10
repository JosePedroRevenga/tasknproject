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
                                    //Inicialización array tareas con contenido proveniente de Internet
                                    //a través del método getTasksFromAPI(), creado previamente en el servi-
                                    //cio Tasks. Hay que usar el método subscribe(), dado que los datos aún no
                                    //se han recibido y no se puede asignar su valor a la variable local tasks.

                                    //En el método subscribe() se debe declarar una función de callback (función)
                                    //que se ejecuta cuando suceda un cierto evento, en nuestro caso la recepción
                                    //del array Task[]. Esto nos devolverá los datos ya formateados.
    // this.tasks = this._tarServ.getTasks();
    this._tarServ.getTasksFromAPI().subscribe( (dataFromAPI) => {

      // console.log('Datos provenientes de la API: ', dataFromAPI);
                                    
                                    //La función anónima devuelve la variable tasks ya con el valor provieniente de Internet
                                    //ya asignado.
      return this.tasks = dataFromAPI;


    });
  };

  
  filtrarTask(filtro, filtroProy){

                                  //If()else para evitar errores a la hora de cargar inicialmente la página, ya que la variable
                                  //local tasks es null hasta la recepción de los datos vía getTasksFromAPI()
    if(this.tasks){
      
      return this.tasks.filter(function(proyecto){
        const texto = (proyecto.desc.toLowerCase().indexOf(filtro.toLowerCase()) >= 0);
        const id = parseInt(filtroProy)?proyecto.proy===parseInt(filtroProy):true;

        return id && texto;
     });
    }else return this.tasks;
 };

}

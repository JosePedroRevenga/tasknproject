import { Injectable } from '@angular/core';
import { Project } from '../modelos/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private  _projects = [
    new Project(1, 'Project a'),
    new Project(2, 'Project b'),
    new Project(3, 'Project c'),
    new Project(4, 'Project d')
    ];
    

  getProjects(){return this._projects};

                                  //Método que recoge de la API la lista de proyectos trámite HttpClient.
                                  //Se debe añadir la definición del tipo(Observable), y qué tipo de contenido
                                  //devuelve en código diamante(<Project[]>, array de Project).

  getProjectsFromAPI():Observable<Project[]>{

                                    //El método GET del HttpClient necesita una url como parámetro, y los datos
                                    //contenidos en ésta deben estar en formato JSON.
                                    //Para transformar ese JSON al formato deseado se usa el código diamante "<tipo de objeto>",
                                    //indicando en su interior el tipo de objeto que concentrán (previamente definido en su servi-
                                    //cio correspondiente).

      return this._httpClient.get<Project[]>('http://www.mocky.io/v2/5cadb0952f00000d343a96e8');
  
    };

getProjectById(anid){

  return this._projects.find(function(aProject){

    return aProject.pid==anid;
  })
};

  constructor(private _httpClient:HttpClient) { }
}

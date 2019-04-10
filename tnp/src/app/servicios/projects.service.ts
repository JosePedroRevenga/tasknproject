import { Injectable } from '@angular/core';
import { Project } from '../modelos/project';

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

getProjectById(anid){

  return this._projects.find(function(aProject){

    return aProject.pid==anid;
  })
};

  constructor() { }
}

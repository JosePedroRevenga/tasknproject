import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Tasks n' Projects";


  projects = [{pid: 0, titulo: 'Angular'}];
 


  //  filtrarProject(str){
  //   return this.projects.filter(function(busqueda){
  //      return (busqueda.pid.toLowerCase().indexOf(str.toLowerCase()) >= 0);
  //    })
  //  };
}

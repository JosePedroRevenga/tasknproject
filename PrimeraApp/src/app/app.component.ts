import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi primera aplicación';

  mostrar = true;
  toggleClick(){

   this.mostrar=!this.mostrar;
  }
};


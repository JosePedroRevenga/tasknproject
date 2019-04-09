import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MostrarTareaComponent } from './tasks/mostrar-tarea/mostrar-tarea.component';
import { ShowProjectComponent } from './projects/show-project/show-project.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    CabeceraComponent,
    MostrarTareaComponent,
    ShowProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

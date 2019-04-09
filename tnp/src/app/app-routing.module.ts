import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MostrarTareaComponent } from './tasks/mostrar-tarea/mostrar-tarea.component';

const routes: Routes = [

  {path: 'tasks', component: TasksComponent, pathMatch: 'full'},
  {path: 'tasks/:tid', component: MostrarTareaComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'tasks', pathMatch:'full'},
  {path:'**',component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

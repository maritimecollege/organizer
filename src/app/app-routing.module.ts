import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassComponent } from './components/class/class.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassesComponent } from './components/classes/classes.component';

const routes: Routes = [
  {
    path: 'class',
    pathMatch: 'full',
    component: ClassComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'class',
    component: ClassComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

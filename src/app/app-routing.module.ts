import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassComponent } from './components/class/class.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassesComponent } from './components/classes/classes.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ClassLearnersComponent } from './components/class-learners/class-learners.component';
import { MarksComponent } from './components/marks/marks.component';

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
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: 'class-students',
    component: ClassLearnersComponent
  },
  {
    path: 'marks',
    component: MarksComponent
  },
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

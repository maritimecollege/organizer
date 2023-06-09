import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { DateService } from 'src/app/shared/date.service';
import { TasksService } from 'src/app/shared/tasks.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {


  form: FormGroup | any
  tasks: Task[] = []

  constructor(public dateService: DateService,
              public tasksService: TasksService) { }

  ngOnInit(): void {
   
  }

  // submit() {
  //   const {title} = this.form.value;

  //   const task: Task = {
  //     title,
  //     date: this.dateService.date.value.format('DD-MM-YYYY')
  //   }

  //   this.tasksService.create(task).subscribe(task => {
  //     this.tasks.push(task)
  //     this.form.reset()
  //   }, err => console.error = err)
  // }

  // remove(task: Task){
  //   this.tasksService.remove(task).subscribe(() => {
  //     this.tasks = this.tasks.filter(t => t.id !== task.id)
  //   }, err => console.error(err))
  // }

}

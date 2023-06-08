import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  form: FormGroup = this._fb.group({
    Id: [''],
    Name: ['', [Validators.required]],
  })

  constructor(private _fb: FormBuilder, public _service: TasksService) { }

  ngOnInit(): void {
  }

  add(): void {
    
    this._service.create(this.form.value, 'Teacher')
  }




}

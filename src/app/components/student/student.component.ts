import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  form: FormGroup = this._fb.group({
    id: [''],
    Name: [''],
    Surname: [''],
    BirthDate: [''],
  })

  constructor(private _fb: FormBuilder, private _service: TasksService) { }

  ngOnInit(): void {
  }

  add(): void {
    console.log(this.form.value)
    this._service.create(this.form.value, 'Learner')
  }

  remove(): void {
    console.log(this.form.value)
    this._service.remove(this.form.value, 'Learner')
  }

}

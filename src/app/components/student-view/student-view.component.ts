import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  @Input()
  public student = [];

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: [''],
    Surname: [''],
    BirthDate: [''],
  })

  constructor(private _fb: FormBuilder, private _service: TasksService) { }

  ngOnInit(): void {
    this.form.patchValue(this.student);
  }

  remove(): void {
    console.log(this.form.value)
    this._service.remove(this.form.value, 'Learner')
  }

  update(): void {
    console.log(this.form.value)
    this._service.update(this.form.value, 'Learner')
  }


}

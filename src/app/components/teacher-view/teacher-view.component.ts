import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss']
})
export class TeacherViewComponent implements OnInit {

  @Input()
  public entity = [];

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: [''],
  })
  options = [];
  constructor(private _fb: FormBuilder, private _service: TasksService) { }

  ngOnInit(): void {
    this.form.patchValue(this.entity);
    this._service.load('Teacher').subscribe(res => {
      this.options = res.map((en: any) => en.attributes);
    })
  }

  remove(): void {
    console.log(this.form.value)
    this._service.remove(this.form.value, 'Teacher')
  }

  update(): void {
    console.log(this.form.value)
    this._service.update(this.form.value, 'Teacher')
  }

}

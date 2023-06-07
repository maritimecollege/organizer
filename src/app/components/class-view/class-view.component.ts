import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {
  @Input()
  public entity = [];

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: [''],
  })

  constructor(private _fb: FormBuilder, private _service: TasksService) { }

  ngOnInit(): void {
    this.form.patchValue(this.entity);
  }

  remove(): void {
    console.log(this.form.value)
    this._service.remove(this.form.value, 'Class')
  }

  update(): void {
    console.log(this.form.value)
    this._service.update(this.form.value, 'Class')
  }
}

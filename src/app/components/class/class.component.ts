import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: [''],
  })

  constructor(private _fb: FormBuilder, private _service: TasksService) { }

  ngOnInit(): void {
  }

  add(): void {
    console.log(this.form.value)
    this._service.create(this.form.value, 'Class')
  }

  remove(): void {
    console.log(this.form.value)
    this._service.remove(this.form.value, 'Class')
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-subject-view',
  templateUrl: './subject-view.component.html',
  styleUrls: ['./subject-view.component.scss']
})
export class SubjectViewComponent implements OnInit {

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
    
    this._service.remove(this.form.value, 'Subject')
  }

  update(): void {
    
    this._service.update(this.form.value, 'Subject')
  }

}

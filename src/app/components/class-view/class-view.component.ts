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
    Teacher: ['']
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
    
    this._service.remove(this.form.value, 'Class')
  }

  update(): void {
    
    this._service.update(this.form.value, 'Class')
  }
}

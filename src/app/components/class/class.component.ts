import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: ['', [Validators.required]],
    Teacher: ['', [Validators.required]]
  })
  options = []
  constructor(private _fb: FormBuilder, public _service: TasksService) { }

  ngOnInit(): void {
    this._service.load('Teacher').subscribe(res => {
      this.options = res.map((en: any) => en.attributes);
    })
  }

  add(): void {
    
    this._service.create(this.form.value, 'Class')
  }

  remove(): void {
    
    this._service.remove(this.form.value, 'Class')
  }

}

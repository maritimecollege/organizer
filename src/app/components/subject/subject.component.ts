import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  form: FormGroup = this._fb.group({
    Id: [''],
    Name: ['', [Validators.required]],
  })

  constructor(private _fb: FormBuilder, public _service: TasksService) { }

  ngOnInit(): void {
  }

  add(): void {
    
    this._service.create(this.form.value, 'Subject')
  }

}

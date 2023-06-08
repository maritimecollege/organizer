import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: ['', [Validators.required]],
    Surname: ['', [Validators.required]],
    BirthDate: ['', [Validators.required]],
    Class: ['', [Validators.required]]
  })
  ru = {}
  constructor(private _fb: FormBuilder, public _service: TasksService) { }

  ngOnInit(): void {
    this._service.load('Class').subscribe(res => {
      // this.options = res;
      this.options = res.map((ent: any) => ent.attributes);

      
    })
  }

  options = [];

  add(): void {
    
    this._service.create(this.form.value, 'Learner').subscribe(res => {
      let arr = this.form.value;
      arr.Id = res;
      this._service.create({Learner: arr }, 'Marks')

    })
  }

  remove(): void {
    
    this._service.remove(this.form.value, 'Learner')
  }

}

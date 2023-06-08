import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  
  students = []

  constructor(public _service: TasksService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._service.spinner.next(true);

    this._service.load('Learner').subscribe(res => {
      
      this.students = res.map((ent: any) => ent.attributes);

      this._service.spinner.next(false);
    });

  }

}

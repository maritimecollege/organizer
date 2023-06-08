import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  entities = []

  constructor(private _service: TasksService) { }

  ngOnInit(): void {
    this._service.load('Teacher').subscribe(res => {
      console.log(res)
      this.entities = res.map((ent: any) => ent.attributes);

    });
  }

}
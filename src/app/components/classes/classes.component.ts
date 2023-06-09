import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  entities = []

  constructor(public _service: TasksService) { }

  ngOnInit(): void {
    this._service.spinner.next(true);

    this._service.load('Class').subscribe(res => {

      this.entities = res.map((ent: any) => ent.attributes);
      this._service.spinner.next(false);
    });
  }
}

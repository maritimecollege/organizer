import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  entities = []

  constructor(private _service: TasksService) { }

  ngOnInit(): void {
    this._service.load('Subject').subscribe(res => {
      
      this.entities = res.map((ent: any) => ent.attributes);

    });
  }

}

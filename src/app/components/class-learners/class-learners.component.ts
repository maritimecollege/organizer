import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-class-learners',
  templateUrl: './class-learners.component.html',
  styleUrls: ['./class-learners.component.scss']
})
export class ClassLearnersComponent implements OnInit {

  entities = []
  initEntities = []
  constructor(private _service: TasksService) { }
  options = [];
  selectedOption: any = {};
  ngOnInit(): void {
    this._service.load('Learner').subscribe((res: any) => {
      this.initEntities = res.map((en: any) => en.attributes);
      this.entities = res.map((en: any) => en.attributes);
    })
    this._service.load('Class').subscribe((res: any) => {
      this.options = res.map((en: any) => en.attributes);
    })
  }

  change($event: any) {
    this.entities = this.selectedOption ? this.initEntities.filter((en: any) => en?.Class?.Id == this.selectedOption.Id) : this.entities;
  }

}

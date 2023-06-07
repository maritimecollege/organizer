import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {

  visibleMark = false;
  entities = []
  initEntities = []
  constructor(private _service: TasksService) { }
  options = [];
  marks: any = [];
  selectedOption: any = {};
  ngOnInit(): void {
    this._service.load('Marks').subscribe((res: any) => {
      this.initEntities = res.map((en: any) => en.attributes);
      this.entities = res.map((en: any) => en.attributes);
    })
    this._service.load('Subject').subscribe((res: any) => {
      this.options = res.map((en: any) => en.attributes);
    })
    this.marks = [
      {
        name: '5',
        value: 5
      },
      {
        name: '4',
        value: 4
      },
      {
        name: '3',
        value: 3
      },
      {
        name: '2',
        value: 2
      },
      {
        name: '1',
        value: 1
      },
    ]
  }

  change($event: any) {
    // this.entities = this.selectedOption ? this.initEntities.filter((en: any) => en?.Class?.Id == this.selectedOption.Id) : this.entities;
  }

  add(entity: any): void {
    // console.log(this.form.value)
    console.log(entity);
    let clone = JSON.parse(JSON.stringify(entity));
    clone.Mark.push(5);
    clone.Subject = this.selectedOption;
    this._service.update(clone, 'Marks')
  }




    visible: boolean;
  selectedMark: any;

    showDialog() {
        this.visible = true;
    }


}

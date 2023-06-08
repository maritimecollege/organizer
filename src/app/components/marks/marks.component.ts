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
    this._service.load('Class').subscribe((res: any) => {
      this.optionsClass = res.map((en: any) => en.attributes);
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
    
    // this.entities = this.selectedOption ? this.initEntities.filter((en: any) => en?.Mark?.Subject?.Id == this.selectedOption.Id) : this.entities;
  }

  add(): void {
    // console.log(this.form.value)
    console.log(this.entity);
    // let mark = JSON.parse(JSON.stringify(this.entity.Mark));
    // console.log(mark)

    let clone = JSON.parse(JSON.stringify(this.entity));
    // clone.Mark = mark;
    console.log(clone)
    if(clone.Mark){
      console.log(clone.Mark?.map((en: any) => en.Subject))
      if(clone.Mark?.map((en: any) => en.Subject.Id).includes(this.selectedOption.Id)){

        
        clone.Mark.forEach((en: any) => {
          console.log(en);
          en.Subject?.Id == this.selectedOption.Id ? en.Marks.push(this.selectedMark.value) : en
        });
      }else {
        clone.Mark.push({Subject: this.selectedOption, Marks: [this.selectedMark.value]})
      }
    }
    
    else {
      clone.Mark = [{Subject: this.selectedOption, Marks: [this.selectedMark.value]}]
    }
    console.log(clone)
    this._service.update(clone, 'Marks')
  }




    visible: boolean;
  selectedMark: any;
  entity: any;
    showDialog(entity: any) {
        this.visible = true;
        this.entity = entity;
    }

    public getMarks(entity: any) {
      return entity?.Mark?.filter((en: any) => en.Subject.Id == this.selectedOption.Id)
    }


  optionsClass = [];
  selectedOptionClass: any = {};


  changeClass($event: any) {
    this.entities = this.selectedOptionClass ? this.initEntities.filter((en: any) => en?.Learner?.Class?.Id == this.selectedOptionClass.Id ) : this.entities;
  }


}

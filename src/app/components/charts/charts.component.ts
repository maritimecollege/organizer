import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  visibleMark = false;
  entities = []
  initEntities = []
  constructor(public _service: TasksService) { }
  options = [];
  marks: any = [];
  selectedOption: any = {};
  data: any;
  optionsChart: any;
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
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    console.log(this.entities.map((en: any) => en.Learner.Name))
    this.data = {
        labels: this.entities.map((en: any) => en.Learner.Name),
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                tension: 0.4
            }
        ]
    };

    this.optionsChart = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
  }

  change($event: any) {
    
    // this.entities = this.selectedOption ? this.initEntities.filter((en: any) => en?.Mark?.Subject?.Id == this.selectedOption.Id) : this.entities;
  }

  add(): void {
    // 

    // let mark = JSON.parse(JSON.stringify(this.entity.Mark));
    // console.log(mark)

    let clone = JSON.parse(JSON.stringify(this.entity));
    // clone.Mark = mark;

    if(clone.Mark){

      if(clone.Mark?.map((en: any) => en.Subject.Id).includes(this.selectedOption.Id)){

        
        clone.Mark.forEach((en: any) => {

          en.Subject?.Id == this.selectedOption.Id ? en.Marks.push(this.selectedMark.value) : en
        });
      }else {
        clone.Mark.push({Subject: this.selectedOption, Marks: [this.selectedMark.value]})
      }
    }
    
    else {
      clone.Mark = [{Subject: this.selectedOption, Marks: [this.selectedMark.value]}]
    }

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

    public getAverageMarks(entity: any) {
      const m = entity?.Mark?.filter((en: any) => en.Subject.Id == this.selectedOption.Id)?.at(0)?.Marks;

      return m ? (m?.reduce((acc: any, en: any) => acc + en) / m?.length)?.toFixed(2) : '';
    }


  optionsClass = [];
  selectedOptionClass: any = {};


  changeClass($event: any) {
    this.entities = this.selectedOptionClass ? this.initEntities.filter((en: any) => en?.Learner?.Class?.Id == this.selectedOptionClass.Id ) : this.entities;
  }


}

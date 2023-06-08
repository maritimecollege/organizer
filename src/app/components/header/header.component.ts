import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];


  constructor(private _router: Router) {

  }

  ngOnInit() {
      this.items = [
          {
              label: 'Классы',
              items: [{
                      label: 'Добавить класс', 
                      icon: 'pi pi-fw pi-plus',
                      command: () => this._router.navigateByUrl('class')
                  },
                  {label: 'Просмотр',
                  command: () => this._router.navigateByUrl('classes')
                },
              ]
          },
          {
              label: 'Учителя',
              items: [{
                      label: 'Добавить учителя', 
                      icon: 'pi pi-fw pi-plus',
                  command: () => this._router.navigateByUrl('teacher')

                  },
                  {label: 'Просмотр',
                  command: () => this._router.navigateByUrl('teachers')
                },
              ]
          },
          {
              label: 'Ученики',
              items: [{
                      label: 'Добавить ученика', 
                      icon: 'pi pi-fw pi-plus',
                      command: () => this._router.navigateByUrl('student')

                  },
                  {label: 'Просмотр',
                  command: () => this._router.navigateByUrl('students')
                },
              ]
          },
          {
              label: 'Предметы',
              items: [{
                      label: 'Добавить предмет', 
                      icon: 'pi pi-fw pi-plus',
                  command: () => this._router.navigateByUrl('subject')

                  },
                  {label: 'Просмотр',
                  command: () => this._router.navigateByUrl('subjects')
                },
              ]
          },
          
          {
              label: 'Выборки',  
              items: [{
                      label: 'Ученики классов', 
                  command: () => this._router.navigateByUrl('class-students')

                  },
                  {
                    label: 'Оценки',
                    command: () => this._router.navigateByUrl('marks')
                },
                //   {
                //     label: 'Успеваемость',
                //     command: () => this._router.navigateByUrl('marks-division')
                // },
              ]
          },
      ];
  }

}

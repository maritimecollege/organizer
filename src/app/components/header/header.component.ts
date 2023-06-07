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
                  {label: 'Просмотр'},
              ]
          },
          {
              label: 'Учителя',
              items: [{
                      label: 'Добавить учителя', 
                      icon: 'pi pi-fw pi-plus',
                  },
                  {label: 'Просмотр'},
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
                  },
                  {label: 'Просмотр'},
              ]
          },
      ];
  }

}

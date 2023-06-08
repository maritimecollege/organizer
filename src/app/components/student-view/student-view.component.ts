import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  @Input()
  public student = [];

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: [''],
    Surname: [''],
    BirthDate: [''],
    Class: [''],
  })

  options = []

  constructor(private _fb: FormBuilder, public _service: TasksService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.form.patchValue(this.student);
    this._service.load('Class').subscribe(res => {
      this.options = res.map((en: any) => en.attributes)
    })
  }

  remove(): void {
    
    this._service.remove(this.form.value, 'Learner')
    
  }

  update(): void {
    
    this._service.update(this.form.value, 'Learner')
  }

  confirm(event: any) {
    this.confirmationService.confirm({
        target: event.target,
        message: 'Вы уверены, что хотите удалить запись?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Да',
        rejectLabel: 'Нет',
        accept: () => {
          this.remove()
        },
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss']
})
export class TeacherViewComponent implements OnInit {

  @Input()
  public entity = [];

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: ['', [Validators.required]],
  })
  options = [];
  constructor(private _fb: FormBuilder, public _service: TasksService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.form.patchValue(this.entity);
    this._service.load('Teacher').subscribe(res => {
      this.options = res.map((en: any) => en.attributes);
    })
  }

  remove(): void {
    
    this._service.remove(this.form.value, 'Teacher')
  }

  update(): void {
    
    this._service.update(this.form.value, 'Teacher')
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

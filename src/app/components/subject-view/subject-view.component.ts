import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-subject-view',
  templateUrl: './subject-view.component.html',
  styleUrls: ['./subject-view.component.scss']
})
export class SubjectViewComponent implements OnInit {

  @Input()
  public entity = [];

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: ['', [Validators.required]],
  })

  constructor(private _fb: FormBuilder, public _service: TasksService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.form.patchValue(this.entity);
  }

  remove(): void {
    
    this._service.remove(this.form.value, 'Subject')
  }

  update(): void {
    
    this._service.update(this.form.value, 'Subject')
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

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {
  @Input()
  public entity = [];

  form: FormGroup = this._fb.group({
    Id: [''],
    Name: ['', [Validators.required]],
    Teacher: ['', [Validators.required]]
  })
  options = [];
  constructor(private _fb: FormBuilder, public _service: TasksService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.form.patchValue(this.entity);
    this._service.load('Teacher').subscribe(res => {
      this.options = res.map((en: any) => en.attributes);
    })
  }

  remove(): void {
    
    this._service.remove(this.form.value, 'Class')
  }

  update(): void {
    
    this._service.update(this.form.value, 'Class')
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


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  form: FormGroup = this._fb.group({
    id: [''],
    name: ['']
  })

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

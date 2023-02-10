import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  form = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    value: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  
  getDataForm() {
    let desc = this.form.controls['description'].value;
    let value = this.form.controls['value'].value;
    let type = this.form.controls['type'].value;
    console.log(desc, value, type);
  }

}

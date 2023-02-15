import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    value: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
    let desc = this.form.controls['name'].value;
    let value = this.form.controls['value'].value;
    let type = this.form.controls['type'].value;
  };

  onSubmit() {
    console.log("Submitted");
  };
}

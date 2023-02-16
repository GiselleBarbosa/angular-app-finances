import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from 'src/app/shared/models/transaction-model';
import { TransactionService } from '../transaction.service';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  private readonly API = 'http://localhost:3000/items';

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    value: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  body: Transaction[] = [];

  constructor(private service: TransactionService) { }

  ngOnInit(): void {

  };

  onSubmit() {
    this.formValues();
    this.reload();
  }

  formValues() {
    let body = {
      name: this.form.controls.name.value,
      value: this.form.controls.value.value,
      type: this.form.controls.type.value
    };

    this.service.create(body).subscribe(
      response => response
    );
  }

  reload() {
    location.reload();
  }
}


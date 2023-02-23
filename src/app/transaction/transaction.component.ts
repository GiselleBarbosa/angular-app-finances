import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transaction } from '../shared/models/transaction-model';
import { TransactionService } from './transaction.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    value: new FormControl(0, [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  incomes: number = 0;
  expense: number = 0;
  total: number = 0;

  body: Transaction[] = [];

  constructor(private service: TransactionService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.formValues();
    this.checkType();
    this.reload();
  }

  formValues() {
    let body = {
      name: this.form.controls.name.value,
      value: this.form.controls.value.value,
      type: this.form.controls.type.value
    };

    if (body.name && body.value && body.type !== '' || null || undefined) {
      this.service.createTransaction(body).subscribe(
        response => response
      );

      alert("Adicionado com sucesso!");
    }
    else {
      alert("Operação não permitida");
    }
    return;
  }

  reload() {
    location.reload();
  }

  checkType() {
    let type = this.form.controls.type.value;
    this.service.checkTransactionType(type);
    console.log(type);
  }


}

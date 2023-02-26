import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Transactions } from 'src/app/shared/models/transactions';

@Component({
  selector: 'app-transaction-update',
  templateUrl: './transaction-update.component.html',
  styleUrls: ['./transaction-update.component.scss'],
})
export class TransactionUpdateComponent implements OnInit {
  form = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    value: [0, Validators.required],
    type: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const transaction: Transactions = this.route.snapshot.data['transaction'];
    this.form.setValue({
      id: transaction.id,
      name: transaction.name,
      value: transaction.value,
      type: transaction.type,
    });
  }

  onSubmit() {}

  onBack() {
    this.router.navigate(['']);
  }

  getErrorMessage() {
    if (this.form.controls.name.hasError('required')) {
      return 'Digite uma descrição válida';
    }

    return this.form.controls.name.hasError('email') ? 'Verifique o campo preenchido' : '';
  }
}

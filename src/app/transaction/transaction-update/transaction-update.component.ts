import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Transactions } from 'src/app/shared/models/transactions';
import { TransactionService } from '../transaction.service';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-transaction-update',
  templateUrl: './transaction-update.component.html',
  styleUrls: ['./transaction-update.component.scss'],
})
export class TransactionUpdateComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    name: [''],
    value: [0],
    type: ['']
  });
  location: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: TransactionService
  ) { }

  ngOnInit() {
    let transaction: Transactions = this.route.snapshot.data['transaction'];
    this.form.patchValue({
      id: transaction.id,
      name: transaction.name,
      value: transaction.value,
      type: transaction.type,
    });

    let json = JSON.stringify(transaction);

    return json;

  }

  onUpdate() {
    const transaction = this.form.value;
    const id = this.form.controls.id.value;

   this.service.update(id, transaction).subscribe(
      pipe(response =>
        response = transaction
      ))

      return this.onBack()

  }

  getErrorMessage() {
    if (this.form.controls.name.hasError('required')) {
      return 'Digite uma descrição válida';
    }

    return this.form.controls.name.hasError('email') ? 'Verifique o campo preenchido' : '';
  }

  onBack() {
    this.router.navigate(['']);
  }



}
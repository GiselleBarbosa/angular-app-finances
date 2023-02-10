import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { TransactionComponent } from './transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';


@NgModule({
  declarations: [
    TransactionComponent,
    TransactionTableComponent,
    TransactionFormComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../shared/material.module';
import { TransactionComponent } from './transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';


@NgModule({
  declarations: [
    TransactionComponent,
    TransactionTableComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class TransactionModule { }

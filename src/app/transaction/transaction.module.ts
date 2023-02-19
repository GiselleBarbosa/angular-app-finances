import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';


@NgModule({
  declarations: [
    TransactionComponent,
    TransactionTableComponent,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule, 
    SharedModule
  ]
})
export class TransactionModule { }

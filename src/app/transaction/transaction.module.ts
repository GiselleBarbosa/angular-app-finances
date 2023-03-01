import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { TransactionRoutingModule } from './transaction-routing.module';

import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { TransactionUpdateComponent } from './transaction-update/transaction-update.component';
import { TransactionComponent } from './transaction.component';

@NgModule({
  declarations: [
    TransactionComponent,
    TransactionTableComponent,
    TransactionUpdateComponent,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class TransactionModule {}

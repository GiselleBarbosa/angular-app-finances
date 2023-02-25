import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { TransactionUpdateComponent } from './transaction-update/transaction-update.component';

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

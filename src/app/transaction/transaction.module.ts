import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../shared/material.module';
import { TransactionComponent } from './transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';


@NgModule({
  declarations: [
    TransactionComponent,
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

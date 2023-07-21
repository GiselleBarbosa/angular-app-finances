import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionUpdateComponent } from './components/transaction-update/transaction-update.component';
import { TransactionComponent } from './transaction.component';
import { TransactionResolver } from './guards/transaction.resolver';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
  },
  {
    path: 'update/:id',
    component: TransactionUpdateComponent,
    resolve: {
      transaction: TransactionResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}

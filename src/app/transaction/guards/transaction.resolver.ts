import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Transactions } from 'src/app/shared/models/transactions';
import { TransactionService } from '../transaction.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionResolver implements Resolve<Transactions> {
  constructor(private service: TransactionService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    if (route.params && route.params['id']) {
      return this.service.getTransactionsByID(route.params['id']);
    }
    return of({ id: '', name: '', value: '', type: '' });
  }
}

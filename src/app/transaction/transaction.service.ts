import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, map, Observable, take } from 'rxjs';
import { Transaction } from '../shared/models/transaction-model';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private API = 'http://localhost:3000/items';

  items?: Transaction[];

  constructor(private http: HttpClient) { }

  getAllTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.API)
      .pipe(take(1),
        delay(1)
      );
  }

  create(transaction: any): Observable<any> {
    return this.http.post(this.API, transaction)
      .pipe(
        map((obj) => obj)
      );
  }
}

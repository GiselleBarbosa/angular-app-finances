import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { first, map, Observable, shareReplay } from 'rxjs';
import { Transactions } from 'src/app/shared/models/transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private API = 'http://localhost:3000/transactions';

  transaction$?: Observable<Transactions[]>;

  constructor(private http: HttpClient) {}

  /*List all transactions */
  getAll(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.API).pipe(first(), shareReplay());
  }

  /*Get transaction by ID */
  getByID(id: string) {
    return this.http.get<Transactions>(`${this.API}/${id}`);
  }

  /*Create new transaction*/
  create(transaction: {}): Observable<{}> {
    return this.http.post(this.API, transaction).pipe(map((obj) => obj));
  }

  /*Update transaction */
  update(id: any, data: any) {
    return this.http.put(`${this.API}/${id}`, data).pipe(map((obj) => obj));
  }

  /*Delete transaction */
  delete(id: string): Observable<Transactions> {
    return this.http.delete<Transactions>(`${this.API}/${id}`);
  }

  /*operations drafts*/
  calculate(type: any, currentValue: number, inputValue: number) {
    if (type === 'entrada') {
      currentValue + inputValue;
    } else if (type === 'saida') {
      currentValue - inputValue;
    } else {
      return;
    }
  }
}

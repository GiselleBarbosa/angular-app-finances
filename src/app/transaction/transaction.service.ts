import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable, shareReplay, take } from 'rxjs';
import { Transactions } from '../shared/models/transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private API = 'http://localhost:3000/items';

  items$?: Observable<Transactions[]>;

  constructor(private http: HttpClient) {}

  /*Retorna todos os items da API*/
  getAllTransactions(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.API).pipe(take(1), shareReplay());
  }

  getByValue() {}

  /*Cria uma nova transação*/
  createTransaction(transaction: {}): Observable<{}> {
    return this.http.post(this.API, transaction).pipe(map((obj) => obj));
  }

  /*Verifica o tipo selecionado*/
  checkTransactionType(type: any) {
    if (type === 'entrada') {
      console.log('escolheu ENTRADA', type);
    } else if (type === 'saida') {
      console.log('escolheu SAIDA', type);
    }
  }

  /*realiza a operação de acordo com tipo selecionado*/

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

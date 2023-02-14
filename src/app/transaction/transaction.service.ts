import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, take } from 'rxjs';
import { Transaction } from '../shared/models/transaction-model';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly API = 'http://localhost:3000/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  items?: Transaction[];

  constructor(private http: HttpClient) { }

  list(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.API)
      .pipe(take(1),
        delay(1)
      )
  }

  create() {
    return this.http.post(this.API, this.items);
  }




}

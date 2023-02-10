import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable } from 'rxjs';
import { TableItems } from '../shared/models/table-transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly API = 'http://localhost:3000/items';

  items?: TableItems[];

  constructor(private http: HttpClient) { }

  list() : Observable<TableItems[]> {
    return this.http.get<TableItems[]>(this.API)
    .pipe(
      first(),
      delay(1)
    )
  }

  post() { }
}

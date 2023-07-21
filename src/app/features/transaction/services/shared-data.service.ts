import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private sharedValue = new Subject<number[]>();

  /* criando um observable para a variavel que sera compartilhada. */
  values$ = this.sharedValue.asObservable();

  constructor() {}

  setValue(value: number[]) {
    this.sharedValue.next(value);
  }
}

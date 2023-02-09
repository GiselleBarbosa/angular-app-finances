import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  incomes: number = 0;
  expense: number = 0;
  total: number = 0;

  constructor() { }

  ngOnInit() {
  }




}

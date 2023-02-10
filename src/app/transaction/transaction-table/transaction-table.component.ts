import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TableItems } from '../../shared/models/table-transaction.model';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  ITEMS_TABLE: TableItems[] = [];

  displayedColumns: string[] = ['description', 'value', 'type', 'actions'];

  dataSource = this.ITEMS_TABLE;

  constructor(private service: TransactionService) { }

  ngOnInit() {
    this.service.list().subscribe(data => this.dataSource = data);
  }




}

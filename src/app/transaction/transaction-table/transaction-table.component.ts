import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MessageErrorComponent } from '../../shared/message-error/message-error.component';
import { TableItems } from '../../shared/models/table-transaction.model';
import { TransactionService } from '../transaction.service';


@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {

  ITEMS_TABLE: TableItems[] = [];

  displayedColumns: string[] = ['description', 'value', 'type', 'update', 'remove', 'status'];

  dataSource = this.ITEMS_TABLE;

  constructor(
    private service: TransactionService,
    public dialog: MatDialog,
  ) {

    this.service.list()
      .pipe(
        catchError(error => {
          this.onError('Não foi possível exibir os extratos. Tente novamente mais tarde.');
          return of([]);
        })
      ).subscribe(data => this.dataSource = data);
  }

  onError(errorMessage: string) {
    this.dialog.open(MessageErrorComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {
  }

  onEdit() {
    console.log("Clicou em EDITAR");
  }

  onDelete() {
    console.log("Clicou em DELETE");
  }

  onShowStatus() {
    console.log("Clicou em Status");
  }


}

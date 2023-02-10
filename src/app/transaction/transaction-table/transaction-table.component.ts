import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TableItems } from '../../shared/models/table-transaction.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MessageErrorComponent } from '../../shared/message-error/message-error.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {

  ITEMS_TABLE: TableItems[] = [];

  displayedColumns: string[] = ['description', 'value', 'type', 'actions'];

  dataSource = this.ITEMS_TABLE;

  constructor(
    private service: TransactionService,
    public dialog: MatDialog,
  ) {

    this.service.list()
    .pipe(
      catchError(error => {
        this.onError('Lista de cursos não encontrada.');
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


}

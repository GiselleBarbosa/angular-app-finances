import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Transactions } from '../../shared/models/transactions';
import { MessageErrorComponent } from '../../shared/message-error/message-error.component';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
})
export class TransactionTableComponent implements OnInit {
  tableItems: Transactions[] = [];

  displayedColumns: string[] = [
    'ID',
    'name',
    'value',
    'type',
    'update',
    'remove',
  ];

  dataSource = this.tableItems;

  constructor(
    private service: TransactionService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service
      .getAll()
      .pipe(
        catchError((error) => {
          this.onError(
            'Não foi possível exibir os extratos. Tente novamente mais tarde.'
          );
          return of([]);
        })
      )
      .subscribe((data) => (this.dataSource = data));
  }

  onError(errorMessage: string) {
    this.dialog.open(MessageErrorComponent, {
      data: errorMessage,
    });
  }

  onDelete() {
    console.log('clicou no botão delete');
  }

  onUpdate(items: Transactions) {
    this.router.navigate(['update', items.id], { relativeTo: this.route });
  }
}

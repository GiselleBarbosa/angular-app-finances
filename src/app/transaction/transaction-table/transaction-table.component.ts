import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';

import { MessageErrorComponent } from '../../shared/message-error/message-error.component';
import { Transactions } from '../../shared/models/transactions';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
})
export class TransactionTableComponent implements OnInit {
  tableItems$: Observable<Transactions[]> = this.service.getAll();

  displayedColumns: string[] = ['name', 'value', 'type', 'update', 'remove'];

  constructor(
    private service: TransactionService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onDelete(items: Transactions) {
    this.service
      .delete(items.id)
      .pipe(
        catchError((err) => {
          this.onError('Erro ao tentar remover transação.');
          return of([]);
        })
      )
      .subscribe();

    this.reload();
  }

  onError(errorMessage: string) {
    this.dialog.open(MessageErrorComponent, {
      data: errorMessage,
    });
  }

  getRouteParams(items: Transactions) {
    this.router.navigate(['update', items.id], { relativeTo: this.route });
  }

  reload() {
    location.reload();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { of, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MessageErrorComponent } from '../../shared/message-error/message-error.component';
import { Transactions } from '../../shared/models/transactions';
import { TransactionService } from '../services/transaction.service';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
})
export class TransactionTableComponent implements OnInit {
  tableItems: Transactions[] = [];

  displayedColumns: string[] = ['name', 'value', 'type', 'update', 'remove'];
  dataSource = this.tableItems;

  values: number[] = [];

  constructor(
    private service: TransactionService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private sharedData: SharedDataService
  ) {}

  ngOnInit() {
    this.service
      .getAll()
      .pipe(
        catchError((err) => {
          this.onError(
            'Houve um erro ao exibir o extrato. Tente novamente mais tarde.'
          );
          return of([]);
        })
      )
      .subscribe((data) => {
        this.dataSource = data;
        /*igualando a variavel dentro deste metodo com a criada fora do constructor */
        let subscribeValues = data.filter((data) => data.value);
        /*passando filtro no obj para obter apenas valores.*/
        this.values = subscribeValues.map((data) => data.value);

        this.sendValue();
      });
  }

  /*metodo para setar a variavel local que ira ser compartilhada com componente irmao via service*/
  sendValue() {
    this.sharedData.setValue(this.values);
  }

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

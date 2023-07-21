import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { DialogMessageComponent } from 'src/app/shared/dialog-message/dialog-message.component';
import { Transactions } from '../../shared/models/transactions';
import { SharedDataService } from '../services/shared-data.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
})
export class TransactionTableComponent implements OnInit {
  public tableItems: Transactions[] = [];

  public displayedColumns: string[] = [
    'name',
    'value',
    'type',
    'update',
    'remove',
  ];
  public dataSource = this.tableItems;

  public subscribeValues?: number[];
  public resultCalculate?: any;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private service: TransactionService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private sharedData: SharedDataService
  ) {}

  public ngOnInit() {
    this.service
      .getAll()
      .pipe(take(1), takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.dataSource = data;

        /*igualando a variavel dentro deste metodo com a criada fora do constructor */
        let subscribeValues = data.filter((data) => data.value);

        /*passando filtro no obj para obter apenas valores.*/
        this.subscribeValues = subscribeValues.map((data) => data.value);

        let valuesToCalculate = this.subscribeValues;

        let resultCalculate = valuesToCalculate.reduce(
          (acc, current) => acc + current,
          0
        );

        this.resultCalculate = resultCalculate;

        /*chama o metodo que ira enviar a variavel ao componente irmao.*/
        this.sendValue();
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /*metodo para setar a variavel local que ira ser compartilhada com componente irmao via service*/
  public sendValue() {
    this.sharedData.setValue(this.resultCalculate);
  }

  public onDelete(items: Transactions) {
    this.service.delete(items.id).subscribe();
    this.reload();
  }

  public getRouteParams(items: Transactions) {
    this.router.navigate(['update', items.id], { relativeTo: this.route });
  }

  public openDialog(title: string, message: string): void {
    this.dialog.open(DialogMessageComponent, {
      data: { title, message },
    });
  }

  public reload() {
    location.reload();
  }
}

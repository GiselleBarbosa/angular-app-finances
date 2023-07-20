import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';

@Injectable()
export class RetryHttpRequestsInterceptorInterceptor
  implements HttpInterceptor
{
  constructor(private dialog: MatDialog) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const maxRetryAttempts = 5;
    let retries = 0;

    return next.handle(req).pipe(
      retry(maxRetryAttempts),
      catchError((error: HttpErrorResponse) => {
        if (retries < maxRetryAttempts) {
          retries++;
          console.log('tentando... ');
          return this.retryRequest(req, next);
        } else {
          () => {
            console.log('errooooo');

            this.openDialog(
              'Erro inesperado',
              'Não foi possível remover o item'
            );
          };
          return throwError(error);
        }
      })
    );
  }

  public openDialog(title: string, message: string): void {
    this.dialog.open(DialogMessageComponent, {
      data: { title, message },
    });
  }

  private retryRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
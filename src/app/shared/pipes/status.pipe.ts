import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Pago': return 'task_alt';
      case 'Pendente': return 'close';
    }
    return 'close';
  }

}

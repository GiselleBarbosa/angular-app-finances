import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typePipe'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Despesa': return 'arrow_circle_up';
      case 'Receita': return 'arrow_circle_down';
    }
    return 'arrow_circle_down';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Despesa': return 'arrow_circle_down';
      case 'Receita': return 'arrow_circle_up';
    }
    return 'arrow_circle_down';
  }
}

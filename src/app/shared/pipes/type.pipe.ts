import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'saida':
        return 'arrow_circle_down';
      case 'entrada':
        return 'arrow_circle_up';
    }
    return 'arrow_circle_down';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typePipe'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'revenue': return 'arrow_circle_up';
      case 'expenses': return 'arrow_circle_down';
    }
    return 'arrow_circle_up';
  }
}

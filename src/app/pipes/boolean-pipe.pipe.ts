import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanPipe',
})
export class BooleanPipePipe implements PipeTransform {
  transform(value: boolean): string {
    if (value == true) {
      return 'Sim';
    } else if (value == false) {
      return 'Não';
    }
    return value;
  }
}

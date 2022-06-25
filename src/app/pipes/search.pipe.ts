import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../model/Produto';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    value: Produto[],
    filterString: string,
    propertyName: string
  ): Produto[] {
    const result: Produto[] = [];
    if (!value || filterString === '' || propertyName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if (
        a[propertyName]
          .trim()
          .toLowerCase()
          .includes(filterString.toLocaleLowerCase())
      ) {
        result.push(a);
      }
    });

    return result;
  }
}

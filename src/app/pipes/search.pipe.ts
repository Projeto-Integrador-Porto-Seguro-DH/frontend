import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../model/Produto';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    value: Produto[],
    filterString: string,
    propertyName: string,
    secondProperty?: boolean
  ): Produto[] {
    const result: Produto[] = [];
    if (!value || filterString === '' || propertyName === '') {
      return value;
    }
    value.forEach((produto: any) => {
      if (!secondProperty) {
        if (
          produto[propertyName]
            .trim()
            .toLowerCase()
            .includes(filterString.toLocaleLowerCase())
        ) {
          result.push(produto);
        }
      }

      if (secondProperty) {
        if (
          produto[propertyName].nomeCategoria
            .trim()
            .toLowerCase()
            .includes(filterString.toLocaleLowerCase())
        ) {
          result.push(produto);
        }
      }
    });

    return result;
  }
}

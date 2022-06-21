import { Pipe, PipeTransform } from '@angular/core';
import { IData } from './service.service';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: IData[], args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter((data) => {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }
}

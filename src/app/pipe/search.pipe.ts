import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, field: string): any[] {
    if (!searchText) return items;
    return items.filter((item) => item[field].toLowerCase().includes(searchText.toLowerCase()));
  }
}

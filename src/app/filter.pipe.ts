import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(name: any | number, p1: string): string {
    if(p1 == 'name')
      {
        return ((name[0].toUpperCase() + name.slice(1)));
      }
    return 'Not found'
    
  }

  
}

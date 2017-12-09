import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case '1':
        return 'high';
      case '2':
        return 'mid';
      case '3':
        return 'low';
      default:
        return 'it aint no priority';
    }
  }

}

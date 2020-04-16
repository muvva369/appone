import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getpercent'
})
export class GetpercentPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addingpipe'
})
export class AddingpipePipe implements PipeTransform {

  transform(value: any): any {
    return  value+1;
  }

}

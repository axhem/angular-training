import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperLower'
})
export class UpperLowerPipe implements PipeTransform {

  transform(value: string, upperLower: string): string {
    if(upperLower === 'upperCase'){
      return value.toUpperCase();
    }else if (upperLower ==='lowerCase'){
      return value.toLowerCase();
    }else{
      return value;
    }
  }

}

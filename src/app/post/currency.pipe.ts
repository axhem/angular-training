import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    if(currency === 'USD'){
      return '$' + value;
    }else{
      return value + ' Lek';
    }
  }

}

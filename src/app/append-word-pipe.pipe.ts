import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendWordPipe'
})
export class AppendWordPipe implements PipeTransform {

  transform(value: string, wordToAppend: string): string {
    // return `${wordToAppend} ${value} ${this.showUserEmail()}`;
    return wordToAppend + ' ' + value + ' ' + this.showUserEmail();
  }

  showUserEmail() {
    return ' My email is : axhemshahaj@gmail.com'
  } 
}

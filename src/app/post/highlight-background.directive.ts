import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightBackground]'
})
export class HighlightBackgroundDirective {

  constructor(public elementRef :ElementRef){
  }

  ngOnInit(){
    this.elementRef.nativeElement.style.color = "wheat";
    // this.elementRef.nativeElement.style.display = 'none';
  }


}

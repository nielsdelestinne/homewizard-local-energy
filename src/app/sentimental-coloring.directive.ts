import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSentimentalColoring]'
})
export class SentimentalColoringDirective {

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement.innerText);
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}

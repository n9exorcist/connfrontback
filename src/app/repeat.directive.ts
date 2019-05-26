import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  exportAs: 'repeat, changeText'
})
export class RepeatDirective {

  @Input('appRepeat') message: string;

  constructor(private el: ElementRef ) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.innerHTML = this.message;

}
}

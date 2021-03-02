import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rocketText]'
})
export class RocketTextDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'bx--text-input');
  }

}

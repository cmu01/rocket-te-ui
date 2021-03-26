import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rocketTabsActive]'
})
export class RocketTabsActiveDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'bx--tabs--scrollable__nav-item--selected');
  }

}

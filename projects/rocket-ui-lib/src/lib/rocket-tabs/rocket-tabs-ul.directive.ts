import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rocketTabsUl]'
})
export class RocketTabsUlDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'bx--tabs--scrollable__nav');
  }

}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rocketTabsLi]'
})
export class RocketTabsLiDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'bx--tabs--scrollable__nav-item');
  }

}

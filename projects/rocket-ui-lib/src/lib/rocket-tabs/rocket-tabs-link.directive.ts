import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rocketTabsLink]'
})
export class RocketTabsLinkDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'bx--tabs--scrollable__nav-link');
  }

}

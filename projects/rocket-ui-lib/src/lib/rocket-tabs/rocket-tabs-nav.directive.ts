import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rocketTabsNav]'
})
export class RocketTabsNavDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'bx--tabs--scrollable');
    renderer.addClass(hostElement.nativeElement, 'bx--tabs--container');
    renderer.addClass(hostElement.nativeElement, 'bx--tabs--scrollable--container');
  }

}

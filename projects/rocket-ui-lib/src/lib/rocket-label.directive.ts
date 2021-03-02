import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rocketLabel]'
})
export class RocketLabelDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'bx--text-input');
  }


}

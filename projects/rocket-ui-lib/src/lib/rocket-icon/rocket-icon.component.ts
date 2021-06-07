import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rocket-icon',
  templateUrl: `./rocket-icon.component.html`,
  styleUrls: ['./rocket-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketIconComponent implements OnInit {
  @Input() options: any = {
    isCenter: true
  };
  @Input() type = '';
  @Output() onClick = new EventEmitter();
  svgStyles: any = {};

  constructor() { }

  ngOnInit(): void {
    this.svgStyles = this.getStyle();
  }

  click(e) {
    if(this.onClick) {
      this.onClick.emit(e);
    }
  }

  getStyle() {
   return {
    'width': (this.options.size || 16) + 'px',
    'height': (this.options.size || 16) + 'px',
    'fill': this.options.color,
    'stroke': this.options.stroke,
    'stroke-width': this.options.strockWidth
   }
  }

  getSrc() {
    if(this.options.isRsImg) {
      return '' + this.options.src;

    }

    return this.options.src;
  }

}

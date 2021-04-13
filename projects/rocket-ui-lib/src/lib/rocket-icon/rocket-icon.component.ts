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

  constructor() { }

  ngOnInit(): void {
  }

  click(e) {
    if(this.onClick) {
      this.onClick.emit(e);
    }
  }

  setColor() {
   return {
     fill: this.options.color,
     stroke: this.options.stroke,
     'stroke-width': this.options.strockWidth
   }
  }0

  getSrc() {
    if(this.options.isRsImg) {
      return '' + this.options.src;

    }

    return this.options.src;
  }

}

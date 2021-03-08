import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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

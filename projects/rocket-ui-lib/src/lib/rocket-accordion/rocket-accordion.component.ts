import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-accordion',
  templateUrl: './rocket-accordion.component.html',
  styleUrls: ['./rocket-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketAccordionComponent implements OnInit {
  @Input() options: any = {};
  @Input() title: any;
  @Input() active: any;
  @Input() id: string;
  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-accordion');
    }
  }

}

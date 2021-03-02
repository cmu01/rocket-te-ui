import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-accordion',
  template: `
    <ibm-accordion>
      <ibm-accordion-item 
          [id]="(id || ('rocket-accordion-' + options.title)) + '-id'"
          [ariaLevel]="options.ariaLevel || '3'"
          [expanded]="options.expanded == null ? 'true' : options.expanded" 
          [title]="options.title">
          <ng-content></ng-content>
      </ibm-accordion-item>
  </ibm-accordion>
  `,
  // styleUrls: ['./rocket-accordion.component.scss'],
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

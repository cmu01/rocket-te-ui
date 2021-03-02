import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-accordion-item',
  template: `
    <ibm-accordion-item  
      [expanded]="options.expanded == null ? 'true' : options.expanded"
      [title]="options.title"
      [id]="(id || ('rocket-accordion-' + options.title)) + '-id'"
      (selected)="select($event)">
      <ng-content></ng-content>
    </ibm-accordion-item>
  `,
  // styleUrls: ['./rocket-accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketAccordionItemComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;
  @Output() triggle = new EventEmitter();
  @Output() filter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-accordion-item');
    }
  }

  select(e) {
    // this.options.expanded = !this.options.expanded;
    this.triggle.emit(e);
  }

}

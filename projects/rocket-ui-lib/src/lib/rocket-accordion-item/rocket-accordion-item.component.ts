import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-accordion-item',
  templateUrl: `./rocket-accordion-item.component.html`,
  styleUrls: ['./rocket-accordion-item.component.scss'],
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

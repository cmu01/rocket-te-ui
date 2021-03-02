import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-search',
  template: `
    <ibm-search [id]="(id || ('rocket-search-' + options.label || 'search')) + '-id'"
      [placeholder]="options.placeholder || ''"
      (valueChange)="update($event)"
      [size]="options.size || 'sm'"
      (clear)="reset()">
    </ibm-search>
  `,
  // styleUrls: ['./rocket-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketSearchComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;
  @Output() onChange = new EventEmitter();
  @Output() clear = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-search');
    }
  }

  update($event) {
    this.onChange.emit($event);
  }

  reset() {
    this.clear.emit();
  }

}

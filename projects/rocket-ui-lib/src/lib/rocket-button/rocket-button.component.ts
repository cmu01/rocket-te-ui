import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-button',
  template: `
    <button [ibmButton]="options.kind" 
      [id]="(id || ('rocket-button-' + options.text)) + '-id'"
      [size]="options.size || 'sm'" 
      [disabled]="disabled == null ? options.disabled : disabled" 
      (click)="click($event)">
      {{options.text}}<ng-content></ng-content>
    </button>
  `,
  // styleUrls: ['./rocket-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketButtonComponent implements OnInit {
  @Input() options: any;
  @Input() small: any;
  @Input() disabled: any;
  @Input() id: string;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-button');
    }
  }

  click(e) {
    this.onClick.emit(e);
  }



}

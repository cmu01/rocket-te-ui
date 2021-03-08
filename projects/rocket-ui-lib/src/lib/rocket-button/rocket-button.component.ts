import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-button',
  templateUrl: `./rocket-button.component.html`,
  styleUrls: ['./rocket-button.component.scss'],
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

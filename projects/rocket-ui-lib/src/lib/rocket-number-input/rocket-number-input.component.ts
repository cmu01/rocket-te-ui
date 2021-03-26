import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-number-input',
  templateUrl: './rocket-number-input.component.html',
  styleUrls: ['./rocket-number-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketNumberInputComponent implements OnInit {
  @Input() options: any = {};
  @Input() title: any;
  @Input() active: any;
  @Input() id: string;
  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-number-input');
    }
  }

}

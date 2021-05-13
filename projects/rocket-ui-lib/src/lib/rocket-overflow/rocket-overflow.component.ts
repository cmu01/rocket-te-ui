import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rocket-overflow',
  templateUrl: `./rocket-overflow.component.html`,
  styleUrls: ['./rocket-overflow.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketOverflowComponent implements OnInit {
  @Input() options: any = {};
  @Output() onSelect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(e) {
    this.onSelect.emit(e);
  }

}

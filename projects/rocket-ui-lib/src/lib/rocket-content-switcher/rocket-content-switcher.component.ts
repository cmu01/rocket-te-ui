import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-content-switcher',
  templateUrl: './rocket-content-switcher.component.html',
  styleUrls: ['./rocket-content-switcher.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketContentSwitcherComponent implements OnInit {
  @Input() options: any;
  @Output() onSelect = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }

  select(e) {
    this.onSelect.emit(e);
  }


}

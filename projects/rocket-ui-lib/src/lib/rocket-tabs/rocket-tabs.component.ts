import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-tabs',
  templateUrl: './rocket-tabs.component.html',
  styleUrls: ['./rocket-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTabsComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;
  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-tabs');
    }
  }

}

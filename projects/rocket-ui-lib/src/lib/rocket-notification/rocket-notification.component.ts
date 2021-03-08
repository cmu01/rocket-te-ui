import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-notification',
  templateUrl: `./rocket-notification.component.html`,
  styleUrls: ['./rocket-notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketNotificationComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-notification');
    }
  }

  onClose() {
    this.close.emit();
  }

}

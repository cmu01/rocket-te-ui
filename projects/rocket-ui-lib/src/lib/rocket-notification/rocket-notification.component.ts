import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-notification',
  template: `
    <ibm-notification [id]="(id || options.id || ('rocket-notification' + options.title)) + '-id'"
      (click)="onClose()"
      [notificationObj]="{
        type: options.type,
        title: options.title,
        message: options.message || options.subtitle,
        showClose: options.showClose == null ? true : options.showClose}">
    </ibm-notification>
  `,
  // styleUrls: ['./rocket-notification.component.scss'],
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

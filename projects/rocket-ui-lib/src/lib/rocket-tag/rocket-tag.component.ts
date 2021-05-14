import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rocket-tag',
  templateUrl: `./rocket-tag.component.html`,
  styleUrls: ['./rocket-tag.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTagComponent implements OnInit {
  @Input() id: any = {};
  @Input() options: any = {};
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close($event) {
    this.onClose.emit($event);

  }

}

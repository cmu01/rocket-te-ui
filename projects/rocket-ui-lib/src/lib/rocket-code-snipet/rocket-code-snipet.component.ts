import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-code-snipet',
  templateUrl: './rocket-code-snipet.component.html',
  styleUrls: ['./rocket-code-snipet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketCodeSnipetComponent implements OnInit {
  @Input() options: any = {};
  @Input() title: any;
  @Input() active: any;
  @Input() id: string;
  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-code-snipet');
    }
  }

}

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-progress-indicator',
  templateUrl: `./rocket-progress-indicator.component.html`,
  styleUrls: ['./rocket-progress-indicator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketProgressIndicatorComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-process-indicator');
    }
  }

}

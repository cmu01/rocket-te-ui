import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-progress-indicator',
  template: `
  <ibm-progress-indicator
    [id]="(id || 'rocket-progress-indicator') + '-id'"
    [steps]="options.steps"
    [current]="options.current">
  </ibm-progress-indicator>
  `,
  // styleUrls: ['./rocket-progress-indicator.component.scss'],
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

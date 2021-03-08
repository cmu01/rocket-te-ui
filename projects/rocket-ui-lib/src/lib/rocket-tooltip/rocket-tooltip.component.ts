import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-tooltip',
  templateUrl: `./rocket-tooltip.component.html`,
  styleUrls: ['./rocket-tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTooltipComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}

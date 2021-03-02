import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-tooltip',
  template: `
    <div *ngIf='options.show' class='inline tooltip-pl'>
      <ibm-tooltip-icon *ngIf="!options.template" [placement]="options.placement || 'bottom'" [alignment]="options.alignment || 'start'" [content]="options.content || ''">
          <ibm-icon-information [size]="options.size || '16'"></ibm-icon-information>
      </ibm-tooltip-icon>

      <span *ngIf="!!options.template"
          [id]="(id || 'rocket') + '-tooltip'"
          [ibmTooltip]="options.template"
          [offset]="{x: options.offset ?  options.offset[0] : 0, y:  options.offset ?  options.offset[1] : 0}"
          [trigger]="options.trigger || 'hover'"
          [placement]="options.placement || 'bottom'">
          <div role="button" class="bx--tooltip__trigger">
            <ibm-icon-information [size]="options.size || '16'"></ibm-icon-information>
          </div>
      </span>
    </div>
  `,
  // styleUrls: ['./rocket-tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTooltipComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}

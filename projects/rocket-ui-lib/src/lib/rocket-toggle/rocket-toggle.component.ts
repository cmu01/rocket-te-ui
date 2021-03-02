import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-toggle',
  template: `
    <div class='rocket-toggle row w1-toggle'>
      <div class='row f4 lh1'>
          <label [for]="(id || ('rocket-radio' + options.label || options.labels)) + '-id'">
              {{options.label || options.labels}}
          </label>
          <rocket-tooltip class='lh2' [options]="tooltip"></rocket-tooltip>
      </div>
      <div class="f1">
            <ibm-toggle 
                [id]="(id || ('rocket-radio' + options.label || options.labels)) + '-id'"
                label=""
                onText=""
                offText=""
                [disabled]="options.disabled"
                [checked]="options.enable"
                (change) = "triggle($event)"
                [size]="options.size || 'md'">
            </ibm-toggle>
      </div>
    </div>
  `,
  // styleUrls: ['./rocket-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketToggleComponent implements OnInit {
  @Input() options: any = {};
  @Input() tooltip: any = {};
  @Input() id: string;
  @Output() onChange = new EventEmitter();
  label: string;

  constructor() { }

  ngOnInit(): void {
    this.label = this.options.label || this.options.labels;

    if(this.id == null) {
      console.warn('Please set id for rocket-toggle');
    }
  }

  triggle($event) {
    this.options.enable = !this.options.enable;
    this.onChange.emit([this.options]);

  }

}

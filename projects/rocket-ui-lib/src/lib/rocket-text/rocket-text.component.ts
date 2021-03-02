import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-text',
  template: `
    <div class="rocket-text relative">
      <div class='row' *ngIf="!!options.label">
          <label [for]="(id || ('rocket-radio-' + options.label)) + '-id'" class="bx--label" [ngClass]="{'marker': options.marked}">
            {{options.label}}
          </label>
          <rocket-tooltip class='tooltip-mt' [options]="tooltip"></rocket-tooltip>
      </div>
        <input [id]="(id || ('rocket-radio-' + options.label)) + '-id'" 
        type="text" [size]="options.size || 'md'" 
        [(ngModel)]="options.data" ibmText 
        [placeholder]="options.placeholder || ''"
        (blue)="onBlue($event)"
        (ngModelChange)="onInputChange($event)" [disabled]="options.disabled" #rocketText="ngModel">
        <div *ngIf="(rocketText.dirty || rocketText.touched) && options.isInvalid" class="bx--form-requirement input-invalid">
          {{options.validationText}}
        </div>
    </div>
  `,
  // styleUrls: ['./rocket-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTextComponent implements OnInit {
  @Input() options: any = {};
  @Input() tooltip: any = {};
  @Input() id: string;
  @Output() onChange = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-text');
    }
  }

  onInputChange($event) {
    this.onChange.emit($event);
  }

  onBlue($event) {
    $event.stopPropagation();
  }

}

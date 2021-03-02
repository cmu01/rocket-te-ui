import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-text-area',
  template: `
    <div class="rocket-text relative">
      <div class='row' *ngIf="!!options.label">
        <label [for]="(id || ('rocket-radio-' + options.label)) + '-id'" class="bx--label" [ngClass]="{'marker': options.marked}">
            {{options.label}}
          </label>
        <rocket-tooltip class='tooltip-mt' [options]="tooltip"></rocket-tooltip>
      </div>
      <textarea [id]="(id || ('rocket-radio-' + options.label)) + '-id'" type="text" [(ngModel)]="options.data" ibmTextArea [placeholder]="options.placeholder"
        (ngModelChange)="onInputChange($event)"[rows]="options.rows"
        [cols]="options.cols" [disabled]="options.disabled" #textArea="ngModel"></textarea>
      <div *ngIf="(textArea.dirty || textArea.touched) && options.isInvalid" class="bx--form-requirement input-invalid">
      {{options.validationText}}
      </div>
    </div>
  `,
  // styleUrls: ['./rocket-text-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTextAreaComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;
  @Input() tooltip: any = {};
  @Output() onChange = new EventEmitter();

  constructor() {
   
  }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-text-area');
    }
  }
  
  onInputChange($event) {
    this.onChange.emit($event);
  }
}

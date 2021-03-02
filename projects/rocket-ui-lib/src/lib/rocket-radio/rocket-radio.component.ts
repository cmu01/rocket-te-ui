import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-radio',
  template: `
    <fieldset *ngIf="!options.isRadio" class="bx--fieldset">
      <div class='row'>
          <label class="bx--label" [for]="(id || ('rocket-radio-' + options.label || options.groupLabel)) + '-id'" [ngClass]="{'marker': options.marked}">
              {{options.label || options.groupLabel}}
          </label>
          <div class='tooltip'>
              <rocket-tooltip *ngIf="tooltip.show" [options]="tooltip" [id]="(id || ('rocket-radio-' + options.label || options.groupLabel)) + '-id'"></rocket-tooltip>
          </div>
      </div>
      <ibm-radio-group
          [id]="(id || ('rocket-radio-' + options.label || options.groupLabel)) + '-id'"
          aria-label="radiogroup"
          [orientation]="options.orientation || 'horizontal'"
          [(ngModel)]="selected"
          (change)="onChange($event)">

          <ibm-radio *ngFor="let radio of options.data"
              [value]="radio.value"
              [checked] = "selected === radio.value"
              [disabled]="radio.disabled">
              {{radio.text || radio.label}}
          </ibm-radio>
      </ibm-radio-group>
    </fieldset>
  `,
  // styleUrls: ['./rocket-radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketRadioComponent implements OnInit {
  @Input() options: any = {};
  @Input() tooltip: any = {};
  // @Input() selected: string;
  @Input() id: string;
  @Output() onSelect = new EventEmitter();
  selected: string;

  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-radio');
    }
    this.selected = this.options.selected || this.options.data[this.options.selectedIndex].value;
  }

  onChange($event) {
    const data = this.options.data.find(d => d.value === $event.value);

    this.onSelect.emit(data);
  }

  update(value) {
    this.selected = value;
  }

}

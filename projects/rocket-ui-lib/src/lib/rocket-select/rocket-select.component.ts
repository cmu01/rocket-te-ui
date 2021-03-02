import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-select',
  template: `
    <ng-container>
      <div class='row' *ngIf="!!options.label">
          <label [for]="(id || ('rocket-select-' + options.label)) + '-id'" class="bx--label" [ngClass]="{'marker': options.marked}">
              {{options.label}}
          </label>
          <rocket-tooltip class='tooltip-mt' [id]="(id || ('rocket-select-' + options.label)) + '-id'" [options]="tooltip || {}"></rocket-tooltip>
      </div>
      <ibm-select [id]="(id || ('rocket-select-' + options.label)) + '-id'" [(ngModel)]="selected" [size]="options.size || 'md'" 
          [ngClass]="{'sm': options.size === 'sm'}" 
          label= "" 
          [display]="options.display || 'default'"
          (change)="select($event)">
          <ng-container *ngIf="options.isGroup">
              <option value="" disabled [selected]='!selected' hidden></option>
              <optgroup *ngFor="let item of options.data" [label]="item.text">
                  <option *ngFor="let type of item.children" [value]="type.value" [selected]='type.value === selected'>{{type.text}}</option>
              </optgroup >
          </ng-container>
          <ng-container *ngIf="!options.isGroup">
              <option value="" disabled [selected]='!selected' hidden></option>
              <option *ngFor="let item of (options.data || items)"  [selected]='getValue(item) === selected'[value]="getValue(item)">{{getLabel(item)}}</option>
          </ng-container>
      </ibm-select>
    </ng-container>
  `,
  // styleUrls: ['./rocket-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
/*
  original parameters: items, selected, change
  new parameters: options = {data, label}, we could use data to replace items
 */
export class RocketSelectComponent implements OnInit {
  @Input() options: any = {};
  @Input() tooltip: any = {};
  @Input() items: any;
  @Input() selected: any;
  @Input() id: string;
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // this.data = this.items;
    if(this.id == null) {
      console.warn('Please set id for rocket-select');
    }
    this.selected = this.selected || this.options.selected;
  }

  select(e) {
    this.onChange.emit(e);
  }

  getValue(item) {
    return item.value == null ?  (item.name == null ? item : item.name) : item.value;
  }

  getLabel(item) {
    if(item.text != null) {
      return item.text;
    }

    if(item.label != null) {
      return item.label;
    }

    if(item.name != null) {
      return item.name;
    }

    return item;
  }

}

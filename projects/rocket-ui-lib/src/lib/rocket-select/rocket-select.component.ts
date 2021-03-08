import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-select',
  templateUrl: `./rocket-select.component.html`,
  styleUrls: ['./rocket-select.component.scss'],
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

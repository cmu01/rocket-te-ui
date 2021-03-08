import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-radio',
  templateUrl: `./rocket-radio.component.html`,
  styleUrls: ['./rocket-radio.component.scss'],
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

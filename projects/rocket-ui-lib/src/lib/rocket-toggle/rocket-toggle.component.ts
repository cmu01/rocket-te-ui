import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-toggle',
  templateUrl: `./rocket-toggle.component.html`,
  styleUrls: ['./rocket-toggle.component.scss'],
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

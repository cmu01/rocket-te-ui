import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-checkbox',
  templateUrl: `./rocket-checkbox.component.html`,
  styleUrls: ['./rocket-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketCheckboxComponent implements OnInit {
  @Input() id: string = '';
  @Input() options: any = {};
  @Input() tooltip: any = {};
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-checkbox');
    }
  }

  change(e) {
    this.onChange.emit(e.checked.toString());
  }

}

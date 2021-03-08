import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-text-area',
  templateUrl: `./rocket-text-area.component.html`,
  styleUrls: ['./rocket-text-area.component.scss'],
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

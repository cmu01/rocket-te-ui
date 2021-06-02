import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-text',
  templateUrl: `./rocket-text.component.html`,
  styleUrls: ['./rocket-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTextComponent implements OnInit {
  @Input() options: any = {};
  @Input() tooltip: any = {};
  @Input() id: string;
  @Output() onChange = new EventEmitter();
  @Output() onFocus = new EventEmitter();

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

  focus($event) {
    if(this.onFocus) {
      this.onFocus.emit($event);
    }
  }

}

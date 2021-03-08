import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-search',
  templateUrl: `./rocket-search.component.html`,
  styleUrls: ['./rocket-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketSearchComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;
  @Output() onChange = new EventEmitter();
  @Output() clear = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-search');
    }
  }

  update($event) {
    this.onChange.emit($event);
  }

  reset() {
    this.clear.emit();
  }

}

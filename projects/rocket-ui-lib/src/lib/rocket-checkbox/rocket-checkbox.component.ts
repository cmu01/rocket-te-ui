import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-checkbox',
  template: `
    <ibm-checkbox
      [disabled]="options.disabled"
      [checked]="options.checked.toString() === 'true'"
      [value]='options.value'
      [id]="(id || ('rocket-checkbox-' + (options.text || options.label || ''))) + '-id'"
      (change)="change($event)">
      <div class='row'>
          <span #ref><ng-content></ng-content></span>
          <span *ngIf="!ref.innerHTML.trim() && !!options.label">{{options.label}}</span>
          <rocket-tooltip [options]='tooltip'></rocket-tooltip>
      </div>  
    </ibm-checkbox>
  `,
  // styleUrls: ['./rocket-checkbox.component.scss'],
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

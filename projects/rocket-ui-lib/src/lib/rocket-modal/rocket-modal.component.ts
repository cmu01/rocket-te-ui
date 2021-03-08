import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-modal',
  templateUrl: `./rocket-modal.component.html`,
  styleUrls: ['./rocket-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketModalComponent implements OnInit {
  @Input() options: any = {};
  @Input() show: boolean;
  @Input() id: string;
  @Output() submit = new EventEmitter();
  @Output() close = new EventEmitter();
  key: string = '';

  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-modal');
    }

    this.key = this.options.openModal == null ? 'show' : 'openModal';
  }

  save() {
    if(this.options.submit) {
      this.options.submit(this.options); // for table delete
    } else {
      this.submit.emit(this.options);
    }

    if(this.options.waitCallback) return;
    
    this.process(false);
  }

  closeModal($event?) {
    this.process(false);
    this.close.emit($event);
  }

  dismissModal() {
    if(!this.options.keepOpen) return;

    this.process(true);
  }

  process(open: boolean) {
    if(this.show == null) {
      this.options[this.key] = open;
    } else {
      this.show = open;
    }
  }

  isDisabled() {
    if(this.options.confirmBtnOpts) {
      return !!this.options.confirmBtnOpts.disabled;
    }
    return false;
  }

  getSubmitBtn() {    
    if(this.options.confirmBtnOpts) {
      return this.options.confirmBtnOpts.text;
    }

    return 'Submit';

  }

  getCancelBtn() {    
    if(this.options.cancelBtnOpts) {
      return this.options.cancelBtnOpts.text;
    }

    return 'Cancel';
  }

  ngOnDestroy() {}

}

import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-modal',
  template: `
      <ibm-modal *ngIf='show == null ? options[key] : show' [open]='show == null ? options[key] : show' [theme]="options.modalType || 'default'" (overlaySelected)="dismissModal()" 
      [id]="(id || ('rocket-modal-' + options.header || '')) + '-id'" [ngClass]="{'model-xl': options.size == 'xl'}">
        <ibm-modal-header (closeSelect)="closeModal()" class="f2 bold" [ngClass]="{'hidden': options.hideClose}" modal-primary-focus>
          <p *ngIf="!!(options.subTitle || options.title || options.label)" class="bx--type-delta bx--modal-header__label">{{options.subTitle || options.title || options.label}}</p>
          <p class="bx--type-beta bx--modal-header__heading">{{options.header || ''}}</p>
        </ibm-modal-header>
        <div class='rocket-modal-content'>
          <ng-content></ng-content>
        </div>
        <ibm-modal-footer *ngIf='!options.hideFooter'>
          <button *ngIf='!(options.cancelBtnOpts || {}).hide' [ibmButton]="(options.cancelBtnOpts || {}).kind || 'secondary'" (click)="closeModal($event)">{{getCancelBtn()}}</button>
          <button [ibmButton]="options.modalType === 'danger' ?  'danger' : 'primary'" [id]="(this.options.confirmBtnOpts || {}).id || 'rocket-modal-submit'" (click)="save()" [disabled]="isDisabled()">{{getSubmitBtn()}}</button>
        </ibm-modal-footer>
      </ibm-modal>
  `,
  // styleUrls: ['./rocket-modal.component.scss'],
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

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-icon',
  template: `
  <div [ngClass]="{'rocket-icon': options.isCenter}" class='inline'>
    <ng-container *ngIf='!options.isImg' [ngSwitch]="type"> 
        <svg *ngSwitchCase="'view'" ibmIconView [size]="options.size || '16'"></svg>
        <svg *ngSwitchCase="'view-off'" ibmIconViewOff [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'information'" ibmIconInformation [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'checkmark-filled'" ibmIconCheckmarkFilled [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'chevron-up'" ibmIconChevronUp [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'chevron-down'" ibmIconChevronDown [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'chevron-left'" ibmIconChevronLeft [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'chevron-right'" ibmIconChevronRight [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'arrow-left'" ibmIconArrowLeft [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'arrow-right'" ibmIconArrowRight [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'home'" ibmIconHome [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'settings'" ibmIconSettings [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'user'" ibmIconUserFilled [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'data-structured'" attr-desc='session' ibmIconDataStructured [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'data-1'" ibmIconData_1 attr-desc='group' [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'checkmark'" ibmIconCheckmark [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'radio-button'" ibmIconRadioButton attr-desc='circle' [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'collaborate'" ibmIconCollaborate attr-desc='login' [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'play-outline'" ibmIconPlayOutline attr-desc='video' [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'close'" ibmIconClose [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'upload'" ibmIconUpload [size]="options.size || '16'"></svg>
        <svg *ngSwitchCase="'delete'" ibmIconDelete [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'unlocked'" ibmIconUnlocked [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'download'" ibmIconDownload [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'folder'" ibmIconFolder [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'folder-add'" ibmIconFolderAdd [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'add'" ibmIconAdd [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'subtract-alt'" ibmIconSubtractAlt [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'document-export'" ibmIconDocumentExport [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'renew'" ibmIconRenew [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'terminal'" ibmIconTerminal [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'edit'" ibmIconEdit [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'undo'" ibmIconUndo [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'y-axis'" attr-desc='YAxis' ibmIconYAxis [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'caret-up'" ibmIconCaretUp attr-desc='group' [size]="options.size || '16'" [ngStyle]='setColor()'>
            <ng-content></ng-content>
        </svg>
        <svg *ngSwitchCase="'caret-down'" ibmIconCaretDown [size]="options.size || '16'" [ngStyle]='setColor()'>
            <ng-content></ng-content>
        </svg>
        <svg *ngSwitchCase="'settings-adjust'" ibmIconSettingsAdjust attr-desc='SettingsAdjust' [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'visual-recognition'" ibmIconVisualRecognition attr-desc='visual-recognition' [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'warning-filled'" ibmIconWarningFilled attr-desc='WarningFilled' [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'warning'" ibmIconWarning [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'document'" ibmIconDocument [size]="options.size || '16'" [ngStyle]='setColor()'></svg>
        <svg *ngSwitchCase="'copy-link'" width="16" height="16" 
            viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <path d="M2,23V3h7.2l3.4,3.4L13.2,7H26v7.6h2V7c0-1.1-0.9-2-2-2H14l-3.4-3.4C10.2,1.2,9.7,1,9.2,1H2C0.9,1,0,1.9,0,3v20
                c0,1.1,0.9,2,2,2h12v-2H2z"/>
            <path d="M31.3,17.6c-1.5-1.6-4.1-1.6-5.6,0c0,0,0,0,0,0l0.9,0.9c1-1,2.7-1,3.8,0c1,1,1,2.7,0,3.8l-5.3,5.3c-1,1-2.7,1-3.8,0
                c-1-1-1-2.7,0-3.8l0.9-0.9L21.3,22l-0.9,0.9c-1.6,1.5-1.6,4.1,0,5.6c0,0,0,0,0,0c0.7,0.7,1.8,1.2,2.8,1.1c1.1,0,2.1-0.4,2.8-1.2
                l5.3-5.3C32.9,21.7,32.9,19.2,31.3,17.6z"/>
            <path d="M14.7,29.6c-1-1-1-2.7,0-3.7c0,0,0,0,0,0l5.3-5.3c1-1,2.7-1,3.7,0c0,0,0,0,0,0c0.5,0.5,0.8,1.2,0.8,1.9
                c0,0.7-0.3,1.4-0.8,1.9l-1.4,1.4l0.9,0.9l1.4-1.4c1.6-1.6,1.6-4.1,0-5.6c-1.6-1.6-4.1-1.6-5.6,0l-5.3,5.3c-1.6,1.5-1.6,4.1,0,5.6
                c0,0,0,0,0,0c0.8,0.7,1.8,1.1,2.8,1.1c1.1,0,2.1-0.4,2.8-1.2l-0.9-0.9C17.5,30.6,15.8,30.6,14.7,29.6C14.7,29.6,14.7,29.6,14.7,29.6
                z"/>
        </svg>
      </ng-container>
      
      <ng-container *ngIf='options.isImg'>
          <img [src]='getSrc()' [width]="options.width || '16'" [height]="options.height || '16'">
      </ng-container>
    </div>
  `,
  // styleUrls: ['./rocket-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketIconComponent implements OnInit {
  @Input() options: any = {
    isCenter: true
  };
  @Input() type = '';

  constructor() { }

  ngOnInit(): void {
  }

  setColor() {
   return {
     fill: this.options.color,
     stroke: this.options.stroke,
     'stroke-width': this.options.strockWidth
   }
  }0

  getSrc() {
    if(this.options.isRsImg) {
      return '' + this.options.src;

    }

    return this.options.src;
  }

}
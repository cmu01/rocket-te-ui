import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-accordion-container',
  template: `
    <ibm-accordion [id]="(id || 'rocket-accordion-container') + '-id'">
      <ng-content ></ng-content>
    </ibm-accordion>
  `,
  // styleUrls: ['./rocket-accordion-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketAccordionContainerComponent implements OnInit {
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
    // if(this.id == null) {
    //   console.warn('Please set id for rocket-accodion-container');
    // }
  }

}

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-accordion-container',
  templateUrl: `rocket-accordion-container.component.html`,
  styleUrls: ['./rocket-accordion-container.component.scss'],
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

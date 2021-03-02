import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-loading',
  template: `
    <div id="rocket-loading">
      <ibm-loading size='normal'></ibm-loading> 
    </div>
  `,
  // styleUrls: ['./rocket-loading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rocket-placeholder',
  template: `
    <ibm-placeholder class='absolute'></ibm-placeholder>
  `
})
export class RocketPlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

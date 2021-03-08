import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-placeholder',
  templateUrl: `./rocket-placeholder.component.html`,
  styleUrls: ['./rocket-placeholder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketPlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

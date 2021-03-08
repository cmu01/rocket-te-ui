import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-loading',
  templateUrl: `./rocket-loading.component.html`,
  styleUrls: ['./rocket-loading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

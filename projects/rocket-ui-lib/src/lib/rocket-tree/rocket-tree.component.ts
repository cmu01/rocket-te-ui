import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-tree',
  templateUrl: './rocket-tree.component.html',
  styleUrls: ['./rocket-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTreeComponent implements OnInit {
  @Input() options: any = {};

  constructor() { }

  ngOnInit(): void {
    this.options.data = this.options.data || []
  }

  trigger(item) {
    item.open = !item.open;
  }

  select(item) {
    item.checked = !item.checked;
    const fn = (d) => {
      if(!d.children) return;

      d.children.forEach(c => {
        c.checked = item.checked;

        if(c.children) {
          fn(c);
        }

      });
    }

    fn(item);
  }

}

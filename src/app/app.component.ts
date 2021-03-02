import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <rocket-button [options]="{
        'text': 'rocket-ui-lib-btn'
    }"></rocket-button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rocket-ui';
}

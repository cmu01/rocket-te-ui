import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketContentSwitcherComponent } from './rocket-content-switcher.component';

describe('RocketContentSwitcherComponent', () => {
  let component: RocketContentSwitcherComponent;
  let fixture: ComponentFixture<RocketContentSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketContentSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketContentSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

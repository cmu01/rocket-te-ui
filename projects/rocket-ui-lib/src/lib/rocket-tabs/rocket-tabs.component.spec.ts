import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketTabsComponent } from './rocket-tabs.component';

describe('CarbonAccordionItemComponent', () => {
  let component: RocketTabsComponent;
  let fixture: ComponentFixture<RocketTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketAccordionComponent } from './rocket-accordion.component';

describe('CarbonAccordionItemComponent', () => {
  let component: RocketAccordionComponent;
  let fixture: ComponentFixture<RocketAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

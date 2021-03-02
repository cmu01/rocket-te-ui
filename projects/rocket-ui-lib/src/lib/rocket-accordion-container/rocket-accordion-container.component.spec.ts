import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketAccordionContainerComponent } from './rocket-accordion-container.component';

describe('RocketAccordionContainerComponent', () => {
  let component: RocketAccordionContainerComponent;
  let fixture: ComponentFixture<RocketAccordionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketAccordionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketAccordionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

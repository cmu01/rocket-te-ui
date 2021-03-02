import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketAccordionItemComponent } from './rocket-accordion-item.component';

describe('RocketAccordionItemComponent', () => {
  let component: RocketAccordionItemComponent;
  let fixture: ComponentFixture<RocketAccordionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketAccordionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

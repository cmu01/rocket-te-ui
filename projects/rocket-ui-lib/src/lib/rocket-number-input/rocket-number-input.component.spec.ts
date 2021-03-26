import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketNumberInputComponent } from './rocket-number-input.component';

describe('CarbonAccordionItemComponent', () => {
  let component: RocketNumberInputComponent;
  let fixture: ComponentFixture<RocketNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

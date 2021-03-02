import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketRadioComponent } from './rocket-radio.component';

describe('RocketRadioComponent', () => {
  let component: RocketRadioComponent;
  let fixture: ComponentFixture<RocketRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

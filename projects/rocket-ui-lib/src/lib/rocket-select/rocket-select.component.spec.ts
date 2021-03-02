import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketSelectComponent } from './rocket-select.component';

describe('CarbonSelectComponent', () => {
  let component: RocketSelectComponent;
  let fixture: ComponentFixture<RocketSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

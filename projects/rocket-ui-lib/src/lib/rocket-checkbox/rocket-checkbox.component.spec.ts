import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketCheckboxComponent } from './rocket-checkbox.component';

describe('RocketCheckboxComponent', () => {
  let component: RocketCheckboxComponent;
  let fixture: ComponentFixture<RocketCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

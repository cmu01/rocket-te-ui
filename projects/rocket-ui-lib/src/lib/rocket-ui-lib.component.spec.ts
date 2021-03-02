import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketUiLibComponent } from './rocket-ui-lib.component';

describe('RocketUiLibComponent', () => {
  let component: RocketUiLibComponent;
  let fixture: ComponentFixture<RocketUiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketUiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

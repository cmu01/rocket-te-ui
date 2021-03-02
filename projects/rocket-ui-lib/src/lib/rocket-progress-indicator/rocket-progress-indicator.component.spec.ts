import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketProgressIndicatorComponent } from './rocket-progress-indicator.component';

describe('RocketProgressIndicatorComponent', () => {
  let component: RocketProgressIndicatorComponent;
  let fixture: ComponentFixture<RocketProgressIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketProgressIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

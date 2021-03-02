import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketTooltipComponent } from './rocket-tooltip.component';

describe('RocketTooltipComponent', () => {
  let component: RocketTooltipComponent;
  let fixture: ComponentFixture<RocketTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

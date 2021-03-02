import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketToggleComponent } from './rocket-toggle.component';

describe('RocketToggleComponent', () => {
  let component: RocketToggleComponent;
  let fixture: ComponentFixture<RocketToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketOverflowComponent } from './rocket-overflow.component';

describe('RocketOverflowComponent', () => {
  let component: RocketOverflowComponent;
  let fixture: ComponentFixture<RocketOverflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketOverflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

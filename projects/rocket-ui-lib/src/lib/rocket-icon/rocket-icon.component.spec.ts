import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketIconComponent } from './rocket-icon.component';

describe('RocketIconComponent', () => {
  let component: RocketIconComponent;
  let fixture: ComponentFixture<RocketIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

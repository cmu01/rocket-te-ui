import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketPlaceholderComponent } from './rocket-placeholder.component';

describe('RocketPlaceholderComponent', () => {
  let component: RocketPlaceholderComponent;
  let fixture: ComponentFixture<RocketPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

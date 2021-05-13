import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketTagComponent } from './rocket-tag.component';

describe('RocketTagComponent', () => {
  let component: RocketTagComponent;
  let fixture: ComponentFixture<RocketTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

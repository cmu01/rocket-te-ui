import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketTextAreaComponent } from './rocket-text-area.component';

describe('RocketTextAreaComponent', () => {
  let component: RocketTextAreaComponent;
  let fixture: ComponentFixture<RocketTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

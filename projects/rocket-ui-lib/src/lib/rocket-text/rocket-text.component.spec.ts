import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketTextComponent } from './rocket-text.component';

describe('RocketTextComponent', () => {
  let component: RocketTextComponent;
  let fixture: ComponentFixture<RocketTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

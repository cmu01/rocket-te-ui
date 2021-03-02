import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketModalComponent } from './rocket-modal.component';

describe('RocketModalComponent', () => {
  let component: RocketModalComponent;
  let fixture: ComponentFixture<RocketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

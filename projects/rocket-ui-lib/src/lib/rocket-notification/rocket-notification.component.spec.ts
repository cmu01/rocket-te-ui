import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketNofiticationComponent } from './rocket-notification.component';

describe('RocketNofiticationComponent', () => {
  let component: RocketNofiticationComponent;
  let fixture: ComponentFixture<RocketNofiticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketNofiticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketNofiticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

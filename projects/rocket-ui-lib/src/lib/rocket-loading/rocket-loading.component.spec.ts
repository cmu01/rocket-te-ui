import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketLoadingComponent } from './rocket-loading.component';

describe('RocketLoadingComponent', () => {
  let component: RocketLoadingComponent;
  let fixture: ComponentFixture<RocketLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

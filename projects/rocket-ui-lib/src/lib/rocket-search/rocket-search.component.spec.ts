import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketSearchComponent } from './rocket-search.component';

describe('RocketSearchComponent', () => {
  let component: RocketSearchComponent;
  let fixture: ComponentFixture<RocketSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

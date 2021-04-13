import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketTreeComponent } from './rocket-tree.component';

describe('RocketTreeComponent', () => {
  let component: RocketTreeComponent;
  let fixture: ComponentFixture<RocketTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

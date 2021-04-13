import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketCodeSnipetComponent } from './rocket-code-snipet.component';

describe('RocketCodeSnipetComponent', () => {
  let component: RocketCodeSnipetComponent;
  let fixture: ComponentFixture<RocketCodeSnipetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketCodeSnipetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketCodeSnipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

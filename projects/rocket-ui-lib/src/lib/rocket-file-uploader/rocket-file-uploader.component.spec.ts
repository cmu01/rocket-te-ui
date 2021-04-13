import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketFileUploaderComponent } from './rocket-file-uploader.component';

describe('RocketFileUploaderComponent', () => {
  let component: RocketFileUploaderComponent;
  let fixture: ComponentFixture<RocketFileUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketFileUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

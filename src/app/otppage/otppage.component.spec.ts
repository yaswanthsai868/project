import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtppageComponent } from './otppage.component';

describe('OtppageComponent', () => {
  let component: OtppageComponent;
  let fixture: ComponentFixture<OtppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

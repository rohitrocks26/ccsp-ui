import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAccumsInquiryComponent } from './member-accums-inquiry.component';

describe('MemberAccumsInquiryComponent', () => {
  let component: MemberAccumsInquiryComponent;
  let fixture: ComponentFixture<MemberAccumsInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAccumsInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAccumsInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

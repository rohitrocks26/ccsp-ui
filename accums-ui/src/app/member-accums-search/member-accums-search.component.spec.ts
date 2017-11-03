import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAccumsSearchComponent } from './member-accums-search.component';

describe('MemberAccumsSearchComponent', () => {
  let component: MemberAccumsSearchComponent;
  let fixture: ComponentFixture<MemberAccumsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAccumsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAccumsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

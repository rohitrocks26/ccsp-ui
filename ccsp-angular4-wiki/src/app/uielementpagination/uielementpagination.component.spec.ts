import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UielementpaginationComponent } from './uielementpagination.component';

describe('UielementpaginationComponent', () => {
  let component: UielementpaginationComponent;
  let fixture: ComponentFixture<UielementpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UielementpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UielementpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

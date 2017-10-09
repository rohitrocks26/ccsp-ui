import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UielementautocompleteComponent } from './uielementautocomplete.component';

describe('UielementautocompleteComponent', () => {
  let component: UielementautocompleteComponent;
  let fixture: ComponentFixture<UielementautocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UielementautocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UielementautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

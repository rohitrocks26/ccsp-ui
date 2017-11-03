import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumsUiContainerComponent } from './accums-ui-container.component';

describe('AccumsUiContainerComponent', () => {
  let component: AccumsUiContainerComponent;
  let fixture: ComponentFixture<AccumsUiContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccumsUiContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumsUiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

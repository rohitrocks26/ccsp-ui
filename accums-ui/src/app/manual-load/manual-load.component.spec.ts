import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualLoadComponent } from './manual-load.component';

describe('ManualLoadComponent', () => {
  let component: ManualLoadComponent;
  let fixture: ComponentFixture<ManualLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

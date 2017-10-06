import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleTestingComponent } from './sample-testing.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('SampleTestingComponent', () => {
  let component: SampleTestingComponent;
  let fixture: ComponentFixture<SampleTestingComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('class="modal"'));
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // To check if the change is reflected onto the UI
  it('should display updated property-name', () => {
  component.name = 'New Name';
  fixture.detectChanges();
  expect(element.textContent).toContain('New Name');
  });
});

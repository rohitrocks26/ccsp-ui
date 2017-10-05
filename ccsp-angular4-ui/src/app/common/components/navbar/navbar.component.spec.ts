import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarCommonComponent } from './navbar.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('SampleTestingComponent', () => {
  let component: NavbarCommonComponent;
  let fixture: ComponentFixture<NavbarCommonComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('p'));
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

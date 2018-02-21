import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports : [ RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should activate the link', () => {
    component.tabs = [ { name : 'Route1', url : '/r1', active : true },
    { name : 'Route2', url : '/r2', active : false },
    { name : 'Route3', url : '/r3', active : false },
  ];
  component.activateLink(component.tabs[1]);
  expect(component.tabs[0].active).toBeFalsy();
  expect(component.tabs[1].active).toBeTruthy();
  expect(component.tabs[2].active).toBeFalsy();
  });
  // To check if the change is reflected onto the UI

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ],
      imports : [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display all the link items', () => {
    component.items = [
      {
        name : 'P1',
        url : '/p1'
      },
      {
        name : 'P2',
        url : '/p2'
      },{
        name : 'P3',
        url : '/p3'
      },
      {
        name : 'P4',
        url : '/p4'
      },
    ];
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.breadcrumb'));
    expect(de.children.length).toBe(component.items.length+1);
  });
});

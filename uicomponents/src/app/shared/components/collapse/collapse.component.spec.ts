import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { CollapseComponent } from './collapse.component';

describe('CollapseComponent', () => {
  let component: CollapseComponent;
  let fixture: ComponentFixture<CollapseComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open collapse on click', () => {
    let spy = spyOn(component,'openCollapse');
    de = fixture.debugElement.query(By.css('.collapseHeading'));
    de.triggerEventHandler('click', null)
    fixture.detectChanges();
    expect(component.openCollapse).toHaveBeenCalled();
  });
  it('should call openCollapse', () => {
    let spy = spyOn(component,'openCollapse');
    component.openCollapse();
    expect(component.openCollapse).toHaveBeenCalled();
  });
});

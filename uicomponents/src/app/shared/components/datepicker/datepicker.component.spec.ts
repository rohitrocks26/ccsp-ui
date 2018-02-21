import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { DatepickerComponent } from './datepicker.component';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should open the calendar on click', () => {
    let spy = spyOn(component,'showCalendar');
    de = fixture.debugElement.query(By.css('.datepickerCalendar'));
    de.triggerEventHandler('click',null);
    expect(component.showCalendar).toHaveBeenCalled();
  });
  it('should return the correct start date', () => {
    component.minDate = undefined;
    fixture.detectChanges();
    expect(component.startDate).toBe("01/01/1850");
  });
  it('should return the correct end date', () => {
    component.maxDate = undefined;
    fixture.detectChanges();
    expect(component.endDate).toBe("01/01/2100");
  });
  it('should create the date object properly for mm/dd/yyyy', () => {
    component.format = "mm/dd/yyyy";
    let dateValue = component.createDateObject('05/01/2018');
    expect(Number(dateValue)).toBe(Number(new Date("2018-05-01")));
  });
  it('should create the date object properly for dd/mm/yyyy ', () => {
    component.format = "dd/mm/yyyy";
    let dateValue = component.createDateObject('05/01/2018');
    expect(Number(dateValue)).toBe(Number(new Date("2018-01-05")));
  });
  it('should write the correct value', () => {
    component.writeValue('05/01/2018');
    expect(component.selectedDate).toBe('05/01/2018');
  });
  it('should mask the date input correctly', () => {
    let currentDate = component.fixDatePattern('1');
    expect(currentDate).toBe('1');
    currentDate = component.fixDatePattern('12');
    expect(currentDate).toBe('12/');
    currentDate = component.fixDatePattern('4');
    expect(currentDate).toBe('04/');
    currentDate = component.fixDatePattern('02/5');
    expect(currentDate).toBe('02/05/');
    currentDate = component.fixDatePattern('02/05/201844');
    expect(currentDate).toBe('02/05/2018');   
    currentDate = component.fixDatePattern('02/11');
    expect(currentDate).toBe('02/11/');   
    
  });
});


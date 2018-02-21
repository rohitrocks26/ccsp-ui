import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SimpleChanges} from '@angular/core';
import { MultiselectComponent } from './multiselect.component';

describe('MultiselectComponent', () => {
  let component: MultiselectComponent;
  let fixture: ComponentFixture<MultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('the selected values should be emitted by propagate change', () => {
    component.selectedValues = ['Hello'];
    let spy = spyOn(component,'propagateChange');
    component.writeValue(['Hello']);
    expect(component.propagateChange).toHaveBeenCalled();
  });
  it('should register on change', () => {
    let fObj = function () {};
    component.registerOnChange(fObj);
   expect(component.propagateChange).toBe(fObj);
  });
  it('should bind to ngModel correctly and emit the correct values', () => {
    component.checkBoxDataList = [ { data : 'Audi', checked : true } ];
    component.onDropdownChange();
    expect(component.displayValue).toBe('Audi');
    component.checkBoxDataList = [ { data : 'Audi', checked : true }, { data : 'BMW', checked : true } ];
    component.onDropdownChange();    
    expect(component.displayValue).toBe('Multiple selected');    
    component.checkBoxDataList = [ { data : 'Audi', checked : false }, { data : 'BMW', checked : false } ];
    component.onDropdownChange();
    expect(component.displayValue).toBe('Please Select');    
    
  });
  it('should update the dropdownlist', () => {
    component.dropdownList = ['Audi','BMW'];
    component.initializeDropdown();
    expect(component.checkBoxDataList[0]['data']).toBe('Audi');
    let changes : any = {};
    changes['dropdownList'] = {};
    changes['dropdownList']['firstChange']=true;
    component.ngOnChanges(changes);
    expect(component.isInputChanged).toBeFalsy();
    changes['dropdownList']['firstChange']=false;
    component.ngOnChanges(changes);
    expect(component.isInputChanged).toBeTruthy();    
  });
});
 
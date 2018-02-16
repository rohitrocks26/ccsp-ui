import {Component, OnInit, Input, forwardRef, OnChanges, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiselectComponent),
    multi: true
  }],
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit, ControlValueAccessor, OnChanges {

  private isInputChanged = false;
  public isToggled: boolean;
  public isSingleValue: boolean;
  @Input() dropdownList: Array<any> = [];
  private selectedValues: Array<any> = [];
  public displayValue: String;
  private checkBoxDataList: Array<any> = [];
  private propagateChange = (_: any) => {};
  writeValue(obj: any): void {
    if (this.selectedValues && this.selectedValues.length > 0) {
      this.propagateChange(this.selectedValues);
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState(isDisabled: boolean): void {
  }

  constructor() {}

  ngOnInit() {
    this.initializeDropdown();
  }
  initializeDropdown() {
    this.checkBoxDataList = [];
    this.selectedValues = [];
    if (this.dropdownList.length > 0) {
      for (let i = 0; i < this.dropdownList.length; i++) {
        const checkBoxData = {};
        checkBoxData['data'] = this.dropdownList[i];
        checkBoxData['checked'] = false;
        checkBoxData['disabled'] = false;
        this.checkBoxDataList.push(checkBoxData);
      }
    }
    if (this.checkBoxDataList && this.checkBoxDataList.length === 1) {
      this.checkBoxDataList[0].checked = true;
      this.checkBoxDataList[0].disabled = true;
      this.displayValue = this.checkBoxDataList[0].data;
      this.selectedValues.push(this.displayValue);
    } else if (this.checkBoxDataList && this.checkBoxDataList.length > 1) {
      this.displayValue = 'Please Select';
    } else {
      this.displayValue = '';
    }
    if (this.isInputChanged) {
      this.propagateChange(this.selectedValues);
    }
  }
  onDropdownChange() {
    this.selectedValues = [];
    for (const item of this.checkBoxDataList) {
      if (item['checked']) {
        this.selectedValues.push(item['data']);
      }
    }
    if (this.selectedValues.length === 1) {
      this.displayValue = this.selectedValues[0];
    } else if (this.selectedValues.length > 1) {
      this.displayValue = 'Multiple selected';
    } else {
      this.displayValue = 'Please Select';
    }
    this.propagateChange(this.selectedValues);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.dropdownList.firstChange) {
      this.isInputChanged = true;
      this.initializeDropdown();
    } else {
      this.isInputChanged = false;
    }
  }
}

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, OnInit, ElementRef, AfterViewChecked,
   Output, EventEmitter, forwardRef, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { ViewChild } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  providers : [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ],
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit, AfterViewChecked, ControlValueAccessor {
 
  @ViewChild('datepickerInput') datePickerInput: ElementRef;
  @Input() minDate: string;
  @Input() maxDate: string;
  @Input() format: string = "mm/dd/yyyy";
  @Input() disabled: boolean;
  @Input() isEditable : boolean = true;
  @Input() calendarIcon : boolean = true;
  @Output() dateChanged: EventEmitter<any> = new EventEmitter();

  public selectedDate: any;
  private propagateChange = (_: any) => { };

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    let that = this;
    debugger;
    $(this.datePickerInput.nativeElement).datepicker({
      startDate: that.startDate,
      endDate: that.endDate,
      format: that.format
    })
  }
  public get startDate() {
    return this.minDate !== undefined ? this.minDate : "01/01/1850";
  }
  public get endDate() {
    return this.maxDate !== undefined ? this.maxDate : "01/01/2100";
  }
  showCalendar() {
    $(this.datePickerInput.nativeElement).datepicker('show');
  }
  ngOnChanges (changes : SimpleChanges) {
    if(this.startDate) $(this.datePickerInput.nativeElement).datepicker('setStartDate', this.createDateObject(this.startDate));
    if(this.endDate) $(this.datePickerInput.nativeElement).datepicker('setEndDate', this.createDateObject(this.endDate));
  }
  ngAfterViewChecked() {
    if (this.selectedDate !== this.datePickerInput.nativeElement.value) {
      setTimeout(()=> {
      this.selectedDate = this.datePickerInput.nativeElement.value;
      this.propagateChange(this.selectedDate);
      this.dateChanged.emit(this.selectedDate);
      },0);
    }
  }
  writeValue(value: any): void {
    this.selectedDate = value;
    $(this.datePickerInput.nativeElement).datepicker('setDate',this.selectedDate);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState(isDisabled: boolean): void {
  }
  show(event: any) {
  }
  selectedDateChanged(date: any) {
  }
  fixDatePattern(currDate) {
    let currentDate = currDate;
    let currentLength = currentDate.length;
    let lastNumberEntered = currentDate[currentLength - 1];

    if (!this.isNumber(lastNumberEntered)) {
      return currentDate.substring(0, currentLength - 1);
    }

    if (currentLength > 10) {
      return currentDate.substring(0, 10);
    }
    let dateCountTracker;
    if (currentLength == 1 && currentDate > 1) {
      let transformedDate = "0" + currentDate + '/';
      dateCountTracker = 2;
      currentLength = transformedDate.length;
      return transformedDate;
    } else if (currentLength == 4 && currentDate[3] > 3) {
      let transformedDate = currentDate.substring(0, 3) + "0" + currentDate[3] + '/';
      dateCountTracker = 5;
      currentLength = transformedDate.length;
      return transformedDate;
    } else if (currentLength == 2 && (dateCountTracker != 2 && dateCountTracker != 3)) {
      dateCountTracker = currentLength;
      return currentDate + '/';
    } else if (currentLength == 5 && (dateCountTracker != 5 && dateCountTracker != 6)) {
      dateCountTracker = currentLength;
      return currentDate + '/';
    }
    dateCountTracker = currentLength;
    return currentDate;
  }

  isNumber(n) : boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  createDateObject(dateString : string) : Date {
    let dateObject;
    let modifiedString;
    if(this.format==='dd/mm/yyyy') {
      modifiedString = dateString.split('/').reverse().join('-');
    }
    else {
      let modifiedStringArray = dateString.split('/');
      modifiedString = [modifiedStringArray[2],modifiedStringArray[0],modifiedStringArray[1]].join('-');
    }
    return new Date(modifiedString);
  }
}

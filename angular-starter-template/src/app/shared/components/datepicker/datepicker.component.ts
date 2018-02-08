import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, OnInit, ElementRef, AfterViewChecked,
   Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ViewChild } from '@angular/core';
declare var $: any;

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
  @Input() format: string;
  @Input() disabled: boolean;
  @Output() dateChanged: EventEmitter<any> = new EventEmitter();

  public selectedDate: any;
  public startDate: string;
  public endDate: string;
  private propagateChange = (_: any) => { };

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.initializeDateValues();
    let that = this;
    $(this.datePickerInput.nativeElement).datepicker({
      startDate: that.startDate,
      endDate: that.endDate,
      format: that.format
    })
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
  initializeDateValues() {
    this.startDate = this.minDate !== undefined ? this.minDate : "01/01/1950";
    this.endDate = this.maxDate !== undefined ? this.maxDate : "01/01/2050";
  }
}

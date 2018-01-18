import { Component, Input, OnInit, ElementRef, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit, AfterViewChecked {
  @ViewChild('datepickerInput') datePickerInput : ElementRef;
  public selectedDate : any;
  @Input() minDate : string;
  @Input() maxDate : string;
  public startDate : string;
  public endDate : string;
  @Output() dateChanged : EventEmitter<any> = new EventEmitter(); 
  constructor () { }

  ngOnInit() {
    this.initializeDateValues();
    let that = this;
    debugger;
    $(this.datePickerInput.nativeElement).datepicker({
      startDate : that.startDate,
      endDate : that.endDate,
    })
    $(this.datePickerInput.nativeElement).on("dp.change",function(e){ console.log(e.date);  });
  }
  ngAfterViewChecked() {
  }
  selectedDateChanged(date : any) {
    let that = this;
    that.dateChanged.emit(date);
  }
  initializeDateValues() {
    this.startDate = this.minDate!== undefined ? this.minDate : "01/01/1950";
    this.endDate = this.maxDate!==undefined ? this.maxDate : "01/01/2050";

  }
}

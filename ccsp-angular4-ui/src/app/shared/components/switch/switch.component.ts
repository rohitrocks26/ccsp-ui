import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, 
  Input, Output, EventEmitter, forwardRef } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',providers : [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ],
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit, ControlValueAccessor {
  @Input() switchValue : boolean;
  @Input() disabled : boolean;
  @Input() switchLabel : string
  @Output() switchValueChanged : EventEmitter<any> = new EventEmitter();
  private propagateChange = (_: any) => { };
  constructor() { }

  ngOnInit() {
  }
  switchSelectionChanged(option : boolean) {
    this.propagateChange(this.switchValue);
    this.switchValueChanged.emit(option);
  }
  writeValue(value: any): void {
    this.switchValue = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState(isDisabled: boolean): void {
  }
}

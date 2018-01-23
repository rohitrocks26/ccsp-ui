import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit, OnChanges {
  @Input() value : any;
  @Input() group : string;
  @Input() disabled : boolean;
  @Input() checked : boolean;
  public radioBtn : any;
  @Output() radioButtonChanged : EventEmitter<any> = new EventEmitter();
  @ViewChild('radioButton') radioButton : any;
  constructor() { }

  ngOnInit() {
    if(this.checked) this.radioBtn = this.value;
  }
  ngOnChanges() {
    this.radioBtn;
  }
  radioBtnChanged(value : any) {
    this.radioBtn = value;
    let radioButtonObject = {};
    radioButtonObject[this.group] = value;
    this.radioButtonChanged.emit(radioButtonObject);
  }
}

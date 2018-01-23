import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() switchValue : boolean;
  @Input() disabled : boolean;
  @Input() switchLabel : string
  @Output() switchValueChanged : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  switchSelectionChanged(option : boolean) {
    let that = this;
    let emittedObject = { };
    emittedObject[this.switchLabel] = option;
    this.switchValueChanged.emit(emittedObject);
  }
}

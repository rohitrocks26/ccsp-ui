import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() checkboxLabel : string;
  @Input() checkboxValue : boolean;
  @Output() checkboxValueChanged : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  checkboxSelectionChanged(option : boolean) {
    debugger;
    let that = this;
    let emittedObject = { };
    emittedObject[this.checkboxLabel] = option;
    this.checkboxValueChanged.emit(emittedObject);
  }
}

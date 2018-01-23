import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() checkboxLabel : string;
  @Input() checkboxValue : boolean;
  @Input() disabled : boolean;
  @Output() checkboxValueChanged : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  checkboxSelectionChanged(option : boolean) {
    let that = this;
    let emittedObject = { };
    emittedObject[this.checkboxLabel] = option;
    this.checkboxValueChanged.emit(emittedObject);
  }
}

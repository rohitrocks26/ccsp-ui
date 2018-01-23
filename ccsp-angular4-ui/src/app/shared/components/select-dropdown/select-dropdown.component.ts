import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent implements OnInit {
  @Input() options : Array<any>;
  @Input() defaultText : string;
  @Input() displayKey : string;
  @Input() isMultiple : boolean;
  @Input() disabled : boolean;
  @Output() optionSelected : EventEmitter<any> = new EventEmitter();
  public selected : any;
  constructor() { }

  ngOnInit() {
    this.selected = this.defaultText;
  }
  selectedItem(option : any) {
    this.optionSelected.emit(option);
  }
}

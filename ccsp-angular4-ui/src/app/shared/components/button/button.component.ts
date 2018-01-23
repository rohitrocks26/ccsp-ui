import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() buttonClicked : EventEmitter<any> = new EventEmitter();
  @Input() disabled : boolean;

  constructor() { }

  ngOnInit() {
  }

  btnClicked(event : any) {
    this.buttonClicked.emit(event);
  }
}


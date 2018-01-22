import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() textareaText : string;
  @Input() numberOfRows : number;
  @Output() textareaChanged : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  textareaTextChanged(text : string) {
    this.textareaChanged.emit(text);
  }
}

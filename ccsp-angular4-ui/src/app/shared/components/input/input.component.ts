import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-input',
  providers: [
  ],
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input() inputData: any;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Output() inputChangeValue: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  public change(value: any) {
    this.inputChangeValue.emit(value);
  }
  public ngOnInit() {
  }
}


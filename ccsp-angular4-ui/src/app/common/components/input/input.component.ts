import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'inputComponent',
  providers: [
  ],
  templateUrl:'./input.component.html'
})
export class InputComponent implements OnInit {
  @Input() inputData: Object;
   @Output() inputChangeValue : EventEmitter<any> = new EventEmitter<any>(); 
     constructor() {}
 public change(ev){
    this.inputChangeValue.emit({"value":ev});
    console.log(ev)
  }
  public ngOnInit() {
  }
}


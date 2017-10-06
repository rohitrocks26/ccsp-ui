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
   @Output() inputCangeValue : EventEmitter<any> = new EventEmitter<any>(); 
     constructor() {}
 public change(ev){
    this.inputCangeValue.emit({"value":ev});
    console.log(ev)
  }
  public ngOnInit() {
  }
}


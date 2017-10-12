import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    HostListener,
    ElementRef
  } from '@angular/core';

  
  @Component({
    selector: 'inputComponent',
    providers: [
    ],
    template: `
   <div class="input-group">
    <span class="input-group-addon">{{inputData.type}}</span>
    <input type="{{inputData.type}}" class="form-control" 
    placeholder="{{inputData.placeHolder}}" value="{{inputData.value}}" [(ngModel)]="inputData.value"
    (blur)="onBlurMethod($event.target.value)">
    </div>
  `
  })
  export class InputComponent implements OnInit {
     @Input() inputData: any;
   @Output() inputChangeValue : EventEmitter<any> = new EventEmitter<any>(); 
     constructor() {
     }
     
 onBlurMethod(value){
  
    this.inputChangeValue.emit({"value":value});
  
  }   
    public ngOnInit() {
     
    }
  }
  
  
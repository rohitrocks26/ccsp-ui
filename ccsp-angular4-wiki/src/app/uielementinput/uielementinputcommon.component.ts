import {
    Component,
    OnInit,
    Input
  } from '@angular/core';

  
  @Component({
    selector: 'inputComponent',
    providers: [
    ],
    template: `
    <div class="input-group">
    <span class="input-group-addon">{{inputData.type}}</span>
    <input type="{{inputData.type}}" class="form-control" name="{{inputData.name}}"
    placeholder="{{inputData.placeHolder}}" value="{{inputData.value}}">
    </div>
  `
  })
  export class InputComponent implements OnInit {
    @Input() inputData: Object;
    constructor(
    ) {}
   
    public ngOnInit() {
     
    }
  }
  
  
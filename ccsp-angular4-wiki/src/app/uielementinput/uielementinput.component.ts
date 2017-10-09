import { InputModel } from './../shared/shared.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-uielementinput',
  templateUrl: './uielementinput.component.html',
  styleUrls: ['./uielementinput.component.css'],
  providers: [InputModel]
})
export class UielementinputComponent implements OnInit {

  constructor(public inputModel: InputModel) { 
    this.inputModel=new InputModel();
    this.inputModel={
    "name":"aditi",
    "id":"text",
    "value":"aditi",
    "placeHolder":"enter a name",
    "type":"text"
  };
  }

  ngOnInit() {
  }

}

import { ModalModule } from './../shared/shared.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uielementnotification',
  templateUrl: './uielementnotification.component.html',
  styleUrls: ['./uielementnotification.component.css']
})
export class UielementnotificationComponent implements OnInit {
  modModalModule;
  constructor() { }

  ngOnInit() {
    this.modModalModule = new ModalModule ("Model header","This is a model component defined for giving the confirmation or error triggered in a particalar process . The properties are fully configurable based on usage !!!!! ");
  }

}

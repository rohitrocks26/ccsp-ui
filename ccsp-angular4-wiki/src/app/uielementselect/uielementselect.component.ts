import { FormSelectValueModule } from './../shared/shared.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uielementselect',
  templateUrl: './uielementselect.component.html',
  styleUrls: ['./uielementselect.component.css']
})
export class UielementselectComponent implements OnInit {
   trnasferdata;
  constructor() { }

  ngOnInit() {
    this.trnasferdata = new FormSelectValueModule("secretquestion","secret","secretquestion",[{key:"pet", value:"Your First pet"},{key:"teacher", value:"Your First teacher"},{key:"bike", value:"Your First bike"}]);
  }

}

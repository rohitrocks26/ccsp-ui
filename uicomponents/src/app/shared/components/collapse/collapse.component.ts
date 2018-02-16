import { Component, OnInit, ViewChild } from '@angular/core';
declare let $;
@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  @ViewChild('collapseBody') collapseBody : any;
  constructor() { }

  ngOnInit() {
  }
  openCollapse() {
    debugger;
    $(this.collapseBody.nativeElement).collapse('toggle');
  }
}

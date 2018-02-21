import { Component, OnInit, ViewChild } from '@angular/core';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
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
    $(this.collapseBody.nativeElement).collapse('toggle');
  }
}

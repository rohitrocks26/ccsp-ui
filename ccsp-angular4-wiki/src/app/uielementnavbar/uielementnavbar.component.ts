import { NavbarCommonComponent } from './uielementnavbarcommon.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uielementnavbar',
  templateUrl: './uielementnavbar.component.html',
  styleUrls: ['./uielementnavbar.component.css']
})
export class UielementnavbarComponent implements OnInit {
constructor() { }
  public navbarModelArray=[{
    "name":"home1",
    "id":"home1",
    "url":"#"
  },{
     "name":"home2",
    "id":"home2",
    "url":"#"
  },
  {
     "name":"home2",
    "id":"home2",
    "url":"#"
  }
]
  ngOnInit() {
  }

}

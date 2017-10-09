import { MenuComponentComponent } from './../menu-component/menu-component.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-uielementmenu',
  templateUrl: './uielementmenu.component.html',
  styleUrls: ['./uielementmenu.component.css']
})
export class UielementmenuComponent implements OnInit {

  constructor() { 
    
  }
  
  public menuModelArray=[{
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

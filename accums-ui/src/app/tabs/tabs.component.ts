import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }
  public classChanged:boolean=false;
  ngOnInit() {
  }
  toggleClass(event){
    this.classChanged=!this.classChanged;
  }
  
}

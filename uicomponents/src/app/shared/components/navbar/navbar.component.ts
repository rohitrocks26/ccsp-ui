import { Component, OnInit, Input } from '@angular/core';
import {NavItem} from './nav-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() tabs: Array<NavItem> = [];
  @Input() title : string;
  constructor() { }

  ngOnInit() {
  }
  activateLink(item: any) {
    var index = this.tabs.indexOf(item);
    this.tabs[index].active = true;
    for (let i = 0; i < this.tabs.length; i++) {
      if (i != index) this.tabs[i].active = false;
    }
  }
}

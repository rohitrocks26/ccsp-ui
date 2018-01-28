import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() size : string = "24";
  @Input() color : string = "black";
  @Input() iconName : string;
  constructor() { }

  ngOnInit() {
  }

}

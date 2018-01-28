import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() hasHeading : boolean;
  @Input() hasBody : boolean;
  @Input() hasFooter : boolean;
  constructor() { }

  ngOnInit() {
  }

}

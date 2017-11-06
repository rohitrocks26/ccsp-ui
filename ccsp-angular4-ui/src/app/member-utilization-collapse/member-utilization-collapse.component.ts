import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../common';

@Component({
  selector: 'member-utilization-collapse',
  templateUrl: './member-utilization-collapse.component.html',
  styleUrls: ['./member-utilization-collapse.component.css']
})
export class MemberUtilizationCollapseComponent implements OnInit {
  @Input() member : Member;
  constructor() { 
  }

  ngOnInit() {
  }

}

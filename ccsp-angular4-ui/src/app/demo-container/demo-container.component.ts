import { Component, OnInit } from '@angular/core';
import { Member } from '../common';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.css']
})
export class DemoContainerComponent implements OnInit {
  public firstMember : Member;
  public secondMember : Member; 
  public familyMember : Member;
  constructor() { }

  ngOnInit() {
    this.firstMember = new Member('John Doe', '12983');
    this.secondMember = new Member('Mary Doe', '12985');
    this.familyMember = new Member('John Doe','12983','20301');
  }

}

import { Component, OnInit } from '@angular/core';
import {Member} from '../common';
@Component({
  selector: 'app-member-accums-inquiry',
  templateUrl: './member-accums-inquiry.component.html',
  styleUrls: ['./member-accums-inquiry.component.scss']
})
export class MemberAccumsInquiryComponent implements OnInit {
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

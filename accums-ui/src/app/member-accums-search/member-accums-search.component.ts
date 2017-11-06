import { Component, OnInit } from '@angular/core';
import { InputModel } from '../common';


@Component({
  selector: 'app-member-accums-search',
  templateUrl: './member-accums-search.component.html',
  styleUrls: ['./member-accums-search.component.scss'],
  
})
export class MemberAccumsSearchComponent implements OnInit {
  public subscriberId :InputModel  = new InputModel("subscriberId","","enter subscriber id","text");
  public groupNumber :InputModel  = new InputModel("groupNumber","","enter group number","text");
  public memberFName :InputModel  = new InputModel("memberFName","","enter member first name","text");
  public memberLName :InputModel  = new InputModel("memberLName","","enter member last name","text");
  public stateCode :InputModel  = new InputModel("stateCode","","enter status code","text");
  public sectionNumber :InputModel  = new InputModel("sectionNumber","","enter section number","text");
  public accountNumber :InputModel  = new InputModel("accountNumber","","enter account number","text");
  public ssn :InputModel  = new InputModel("ssn","","enter ssn","text");
  constructor() { }

  ngOnInit() {
  }

 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public items=[
  {
    "subscriberId":"20301",
    "memberPartyId":"12983",
    "memberName":"John Doe",
    "groupNumber":"100",
    "sectionNumber":"1",
    "accountNumber":"1010100",
    "ssn":"xxx.xxx.xxxx",
    "relationship":"subscriber",
    "gender":"Male",
    "dob":"01/09/1980",
    "planPeriod":"",
    "benefitPeriod":"",
    "networkType":"",
    "accumType":""
  },
  {
    "subscriberId":"20301",
    "memberPartyId":"12985",
    "memberName":"Mary Doe",
    "groupNumber":"100",
    "sectionNumber":"1",
    "accountNumber":"1010101",
    "ssn":"xxx.xxx.xxxx",
    "relationship":"dependent",
    "gender":"Female",
    "dob":"02/08/1972",
    "planPeriod":"",
    "benefitPeriod":"",
    "networkType":"",
    "accumType":""
  },
  {
    "subscriberId":"20301",
    "memberPartyId":"12984",
    "memberName":"Sally Doe",
    "groupNumber":"100",
    "sectionNumber":"1",
    "accountNumber":"1010110",
    "ssn":"xxx.xxx.xxxx",
    "relationship":"dependent",
    "gender":"Female",
    "dob":"03/09/2000",
    "planPeriod":"",
    "benefitPeriod":"",
    "networkType":"",
    "accumType":""
  },
  ];
  searchList(){
  
      var items: Array<any> = [];
      for(var i = 0; i <= this.items.length; i++){
        
         items.push(this.items[i]);
         
      }
      return items;
    }
}

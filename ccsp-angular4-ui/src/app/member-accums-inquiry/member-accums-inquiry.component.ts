import { Component, OnInit ,SimpleChanges} from '@angular/core';
import { CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent } from 'ng-auto-complete';
import { CurrencyPipeModule } from '../common/modules/currency-pipe/currency-pipe.module';
import { GlobalService, Modal, Input } from '../common';

@Component({
  selector: 'app-member-accums-inquiry',
  templateUrl: './member-accums-inquiry.component.html',
  styleUrls: ['./member-accums-inquiry.component.css'],
  providers:[CurrencyPipeModule]
})

export class MemberAccumsInquiryComponent implements OnInit {

title = 'app';
  public donation : string; 
  public modeltransfer:Modal = new Modal("Model header","This is a model component defined for giving the confirmation or error triggered in a particalar process . The properties are fully configurable based on usage !!!!! ");
  public username :Input  = new Input("username","","enter username","text","username");
  public EXtn :Input  = new Input("extension","","enter extn.","text","extension");
  public office :Input  = new Input("office","","enter office location","text","office");
  public groupItem=[
  {"title": 'BTA', "id": '2'},
  {"title": 'Consultant', "id": '3'},
  {"title": 'Senior Consultant', "id": '4'},
  {"title": 'Manager', "id": '5'},
  {"title": 'Senior Manager', "id": '6'},
  {"title": 'DC Specialist Leader', "id": '7'},
  {"title": 'Managing Director', "id": '8'}];
public group =
CreateNewAutocompleteGroup(
'--Select--',
'completer',
this.groupItem,
{titleKey: "title", childrenKey: null}
);

public items=[
  {
    "username":"Victoria Cantrell",
    "position":"BTA",
    "office":"Bengaluru",
    "Extn":"0892",
   "startDate":"2017/08/09",
    "salary":"208,192"
  },{    
    "username":"Pearl Crosby",
    "position":"Consultant",
    "office":"Hyderabad",
   "Extn":"0401",
   "startDate":"2017/05/10",
    "salary":"312,124"
  },
  {
    "username":"Colette Foley",
    "position":"Senior Consultant",
    "office":"Delhi",
    "Extn":"0521",
   "startDate":"2017/07/10",
    "salary":"408,124"
  },{
    "username":"Victor Cantel",
    "position":"Consultant",
    "office":"Bengaluru",
    "Extn":"0892",
   "startDate":"2017/09/08",
    "salary":"312,124"
  },
  {
    "username":"John Doe",
    "position":"BTA",
    "office":"Bengaluru",
    "Extn":"0892",
   "startDate":"2017/08/09",
    "salary":"208,192"
  }
]

public itemLength=this.items.length;
public limit:number=3;
public minCount:number=0;
public maxCount:number=this.limit-1;
public id : string;
public data : string;
constructor ( private globalService : GlobalService ) {

}
public filteredItems:Array<any>=[];
assignCopy(){
  this.filteredItems = Object.assign([], this.items);
}
filterItem(value){
  if(!value) this.assignCopy(); //when nothing has typed
  this.filteredItems = Object.assign([], this.items).filter(
     item => item.username.toLowerCase().indexOf(value.toLowerCase()) > -1
  )
  this.itemLength=this.filteredItems.length;
}
list(){
  var itemsList: Array<any> = [];
  if(this.filteredItems.length>0){
    itemsList=this.filteredItems;
  }
  else{
    itemsList=this.items;
  }
  
  if(itemsList.length<=this.maxCount){
    this.maxCount=itemsList.length-1;
  }
    var items: Array<any> = [];
    for(var i = this.minCount; i <= this.maxCount; i++){
      
       items.push(itemsList[i]);
       
    }
    return items;
  }
  requestData() {
    this.globalService.getRequest('http://34.208.243.62:6001/benefitcoding/adminplan/' + this.id)
    .subscribe(data=> this.loadData(data));
  }
  loadData (data : any) {
    this.data = data;
    console.log(data);
  }
  changePage(ev){
    this.maxCount=ev.maxCount;
    this.minCount=ev.minCount;

  }
 
  ngOnInit() {
  }
}






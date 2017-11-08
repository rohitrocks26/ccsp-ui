import { Component, OnInit } from '@angular/core';
import { CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent } from 'ng-auto-complete';
import { CurrencyPipeModule } from '../common/modules/currency-pipe/currency-pipe.module';
import { GlobalService, Modal, Input } from '../common';

@Component({
  selector: 'demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css'],
  providers:[CurrencyPipeModule]
})
export class DemoPageComponent implements OnInit {
  title = 'app';
  public donation : string; 
  public modeltransfer:Modal = new Modal("Model header","This is a model component defined for giving the confirmation or error triggered in a particalar process . The properties are fully configurable based on usage !!!!! ");
  public inputtransfer :Input  = new Input("Amount","","enter some amount","text","amount");
  public groupItem=[{"title": 'aditi', "id": '1'},
  {"title": 'yash', "id": '2'},
  {"title": 'nitin', "id": '3'},
  {"title": 'anil', "id": '4'},
  {"title": 'somdatt', "id": '5'},
  {"title": 'rohit', "id": '1'},
  {"title": 'nitish', "id": '2'},
  {"title": 'koyel', "id": '3'},
  {"title": 'shreeram', "id": '4'},
  {"title": 'sourin', "id": '5'}];
public group =
CreateNewAutocompleteGroup(
'Search from list',
'completer',
this.groupItem,
{titleKey: "title", childrenKey: null}
);

public items=[
  {
    "name":"content1",
    "id":"content1",
    "url":"#"
  },{
     "name":"content2",
    "id":"content2",
    "url":"#"
  },
  {
    "name":"content3",
    "id":"content3",
    "url":"#"
  },{
     "name":"content4",
    "id":"content4",
    "url":"#"
  },
  {
    "name":"content5",
    "id":"content5",
    "url":"#"
  },{
     "name":"content6",
    "id":"content6",
    "url":"#"
  }
]
 public menuModelArray=[{
    "name":"home",
    "id":"home",
    "url":"#"
  },{
     "name":"about",
    "id":"about",
    "url":"#"
  },
  {
     "name":"contact us",
    "id":"contact us",
    "url":"#"
  }
]
public itemLength=this.items.length;
public limit:number=2;
public minCount:number=0;
public maxCount:number=this.limit-1;
public id : string;
public data : string;
constructor ( private globalService : GlobalService ) {

}

list(){
  if(this.items.length<this.maxCount){
    this.maxCount=this.items.length-1;
  }
    var items: Array<any> = [];
    for(var i = this.minCount; i <= this.maxCount; i++){
      
       items.push(this.items[i]);
       
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
    console.log("inside the inint");
  }

}

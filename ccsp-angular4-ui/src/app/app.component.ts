import { CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent } from 'ng-auto-complete';
import { CurrencyPipeModule } from './common/modules/currency-pipe/currency-pipe.module';
import { InputModule } from './common/model/input/input.module';
import { ModalModule } from './common/model/modal/modal.module';

import { Component ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CurrencyPipeModule]
})
export class AppComponent {
  title = 'app';
  public modeltransfer:ModalModule = new ModalModule ("Model header","This is a model component defined for giving the confirmation or error triggered in a particalar process . The properties are fully configurable based on usage !!!!! ");
  public inputtransfer : InputModule = new InputModule("Amount","","enter some amount","text");
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
  changePage(ev){
    this.maxCount=ev.maxCount;
    this.minCount=ev.minCount;

  }
}

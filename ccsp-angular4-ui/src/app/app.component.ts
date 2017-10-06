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
  public groupItem=[{"title": 'qwerty', "id": '1'},
  {"title": 'asdfg', "id": '2'},
  {"title": 'zxcvb', "id": '3'},
  {"title": 'qaz', "id": '4'},
  {"title": 'wsx', "id": '5'},
  {"title": 'qwtyuii', "id": '1'},
  {"title": 'ashjk', "id": '2'},
  {"title": 'zxbnmb', "id": '3'},
  {"title": 'qsfj', "id": '4'},
  {"title": 'wsxyjhgj', "id": '5'}];
public group =
CreateNewAutocompleteGroup(
'Search from list',
'completer',
this.groupItem,
{titleKey: "title", childrenKey: null}
);

public items=[
  {
    "name":"home1",
    "id":"home",
    "url":"#"
  },{
     "name":"home2",
    "id":"home",
    "url":"#"
  },
  {
    "name":"home3",
    "id":"home",
    "url":"#"
  },{
     "name":"home4",
    "id":"home",
    "url":"#"
  },
  {
    "name":"home5",
    "id":"home",
    "url":"#"
  },{
     "name":"home6",
    "id":"home",
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

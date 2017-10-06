import { CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent 
   } from 'ng-auto-complete';
import { CurrencyPipeModule } from './common/modules/currency-pipe/currency-pipe.module';
import { InputModule } from './common/model/input/input.module';
import { ModalModule } from './common/model/modal/modal.module';

import { Component } from '@angular/core';

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

}

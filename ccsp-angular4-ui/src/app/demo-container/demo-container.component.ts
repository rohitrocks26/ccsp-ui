import { GlobalService } from './../core/global/global.service';
import { AutoCompleteComponent } from './../shared/components/autocomplete/autocomplete.component';
import { AutoCompleteGroup } from './../shared/components/autocomplete/autocomplete-group';
import { Constants } from './../../../../ccsp-angular4-ui-poc/src/app/common/constants';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from '../models/appstate'
import { Action } from '../models/action';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss']
})
export class DemoContainerComponent implements OnInit {
  selectedValue : string;
  public autocompleteGroup : AutoCompleteGroup = new AutoCompleteGroup('',[]);
  public autocompleteGrp : any = {};
  title : string = "Search a sport";
  items : Array<string> = [
    'Cricket',
    'Football',
    'Basketball'
  ];
  public menuModelArray=[{
    "name":"home",
    "id":"home",
    "url":"#/demoPage"
  },{
     "name":"about",
    "id":"about",
    "url":"#/demoContainer"
  },
  {
     "name":"contact us",
    "id":"contact us",
    "url":"#"
  }
  ];
  public data : any;
  users : Array<string> = ['Yash','Somdatt','Aditi'];
  subscription : Subscription;
  init : boolean;
  constructor(private store : Store<AppState>, private globalService : GlobalService) {
    this.subscription = this.store.select(state => state.selectedUser).filter(Boolean)
      .subscribe( value=> this.selectedValue = value);
   }

  ngOnInit() {
    this.globalService.postRequest('https://jsonplaceholder.typicode.com/posts/1', { id : 'sss'})
    .subscribe(data=>this.loadData(data), error=>this.handleError(error))
  }
  loadData(data : any) {
    this.data = data;
  }
  handleError(error : any) {
    console.log("Error in DemoContainer :" +  error);
  }
  change(event : string) {
    this.store.dispatch(new Action('UPDATE_SELECTED_USER',event));
  }
  ngOnDestroy() {
    this.init = false;
    this.subscription.unsubscribe();
  }

}

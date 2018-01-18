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
  ]
  users : Array<string> = ['Yash','Somdatt','Aditi'];
  subscription : Subscription;
  init : boolean;
  constructor(private store : Store<AppState>) {
    this.subscription = this.store.select(state => state.selectedUser).filter(Boolean)
      .subscribe( value=> this.selectedValue = value);
   }

  ngOnInit() {
    this.init = true;
  }
  change(event : string) {
    this.store.dispatch(new Action('UPDATE_SELECTED_USER',event));
  }
  ngOnDestroy() {
    this.init = false;
    this.subscription.unsubscribe();
  }

}

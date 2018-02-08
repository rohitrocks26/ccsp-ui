import { GlobalService } from './../core/global/global.service';
import { HttpResponseError } from '../core/global/http-response-error';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../models/appstate'
import { Action } from '../models/action';
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Subscription';
import { GlobalConstants } from '../shared/globalconstants';


declare var $ : any;
@Component({
  selector: 'demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
  providers: []
})
export class DemoPageComponent implements OnInit {
  private data : any;
  constructor(private globalService: GlobalService, private store: Store<AppState>,
    private globalContants: GlobalConstants) {
  }
  ngOnInit() {
    this.globalService.getRequest('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data=>this.loadData(data), error=>this.handleError(error))
  }
  loadData(data : any) {
    this.data = data;
  }
  handleError(error : any) {
    console.log("Error in DemoContainer :" +  error);
  }
}

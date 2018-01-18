import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import { AppState } from '../../models/appstate'
import { Action } from '../../models/action';
import { GlobalService } from '@app/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  skills : any;
  sub : Subscription;
  httpSub : Subscription;
  constructor(private store : Store<AppState>, private globalService : GlobalService) { 
    this.sub = this.store.select(state => state.selectedUser).filter(Boolean)
      .subscribe( value=> this.getSkills(value));
  }

  ngOnInit() {
  }
  getSkills(value : string) {
    this.httpSub = this.globalService.getRequest(`http://localhost:3000/${value}`)
    .subscribe(skills => this.skills = skills);
  }
  ngOnDestory() {
    this.sub.unsubscribe();
    this.httpSub.unsubscribe();
  }
}

import { AutoCompleteGroup } from './../shared/components/autocomplete/autocomplete-group';
import { GlobalService } from './../core/global/global.service';
import { HttpResponseError } from './../../../../accums-ui/src/app/core/global/http-response-error';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipeModule } from '../shared/modules/currency-pipe/currency-pipe.module';
import { Modal } from '../shared/components/modal/modal';
import { Input } from '../shared/components/input/input';
import { AppState } from '../models/appstate'
import { Action } from '../models/action';
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Subscription';
import { Globals } from '../shared/globals';
import {NavItem} from '../shared/components/navbar/nav-item';

@Component({
  selector: 'demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
  providers: [CurrencyPipeModule]
})
export class DemoPageComponent implements OnInit {
  title = 'app';
  public donation: string;
  public radioButtonValue : any;
  public autoCompleteGroup: AutoCompleteGroup;
  public modelTransfer: Modal = new Modal("Model header", "This is a model component defined for giving the confirmation or error triggered in a particalar process . The properties are fully configurable based on usage !!!!! ");
  public inputObject: Input = new Input("Amount", "", "enter some amount", "text", "amount");
  public group = ['America',
    'Australia',
    'Africa',
    'Bangladesh',
    'Bahrain',
    'India',
    'Zimbabwe'
  ];

  public items = [
    {
      "name": "content1",
      "id": "content1",
      "url": "#"
    }, {
      "name": "content2",
      "id": "content2",
      "url": "#"
    },
    {
      "name": "content3",
      "id": "content3",
      "url": "#"
    }, {
      "name": "content4",
      "id": "content4",
      "url": "#"
    },
    {
      "name": "content5",
      "id": "content5",
      "url": "#"
    }, {
      "name": "content6",
      "id": "content6",
      "url": "#"
    }
  ]
  public menuModelArray : Array<NavItem> = [{
    name: "home",
    url: "/demoPage",
    active : true
  }, {
    name: "about",
    url: "../demoContainer",
    active : false
  },
  {
    name: "contact us",
    url: "#",
    active : false
  }
  ]
  public select_options : Array<any> = [{
    name : 'Option 1',
    value : 'Opt1'
  },
  {
    name : 'Option 2',
    value : 'Opt2'
  },
  {
    name : 'Option 3',
    value : 'Opt3'
  },
  {
    name : 'Option 4',
    value : 'Opt4'
  },
]
  public textareaText = "Initial textarea text";

  public itemLength = this.items.length;
  public limit: number = 2;
  public minCount: number = 0;
  public maxCount: number = this.limit - 1;
  public id: string;
  public data: string;
  public subscription: Subscription;
  public gender : any;
  public value : boolean = false;
  constructor(private globalService: GlobalService, private store: Store<AppState>,
    private globals: Globals) {
    this.subscription = this.store.select(appState => appState.selectedUser)
      .subscribe(value => this.id = value)
  }

  list() {
    if (this.items.length < this.maxCount) {
      this.maxCount = this.items.length - 1;
    }
    var items: Array<any> = [];
    for (var i = this.minCount; i <= this.maxCount; i++) {

      items.push(this.items[i]);

    }
    return items;
  }
  requestData() {
    this.subscription = this.globalService.getRequest(this.globals.apiUrl, { value: '10' })
      .subscribe(data => this.loadData(data),
      error => this.handleError(error));
  }
  loadData(data: any) {
    this.data = data;
    console.log(data);
  }
  handleError(error: HttpResponseError) {
    console.log(error.errorMessage);
    console.log(error.errorDescription);
  }
  changePage(ev) {
    this.maxCount = ev.maxCount;
    this.minCount = ev.minCount;

  }
  selectSelection(option : any) {
  }
  ngOnInit() {
    console.log("inside the inint");
    this.autoCompleteGroup = new AutoCompleteGroup("Search a country", this.group);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  dateSelected(date: any) {
    console.log("Date :" + date);
  }
  checkboxChanged(value : any) {
  }
  textareaChanged(value : string) {
    this.textareaText = value;
  }
  buttonClicked(event : any ) {
  }
  radioButtonChanged(radioButtonValue : any) {
  }
  switchChanged(switchButtonValue : any) {
  }
  ngOnChanges() {
  }
}

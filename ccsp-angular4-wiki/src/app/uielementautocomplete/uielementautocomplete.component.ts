import { AutoCompleteComponent } from './uielementautocompletecommon';
import { Component, OnInit } from '@angular/core';
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";

@Component({
  selector: 'app-uielementautocomplete',
  templateUrl: './uielementautocomplete.component.html',
  styleUrls: ['./uielementautocomplete.component.css']
})
export class UielementautocompleteComponent implements OnInit {

  constructor() { }
  public groupItem=[{"title": 'nitin', "id": '1'},
  {"title": 'yash', "id": '2'},
  {"title": 'somdatt', "id": '3'},
  {"title": 'koyel', "id": '4'},
  {"title": 'anil', "id": '5'},
  {"title": 'rohit', "id": '1'},
  {"title": 'aditi', "id": '2'},
  {"title": 'nitish', "id": '3'},
  {"title": 'shreeram', "id": '4'},
  {"title": 'sarita', "id": '5'}];
public group =
CreateNewAutocompleteGroup(
'Search from list',
'completer',
this.groupItem,
{titleKey: "title", childrenKey: null}
);

  ngOnInit() {
  }

}

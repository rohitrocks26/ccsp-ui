import { AutoCompleteGroup } from './autocomplete-group';

import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  providers: [
  ],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutoCompleteComponent implements OnInit {

  @Input() autoCompleteGroup : AutoCompleteGroup = new AutoCompleteGroup("");
  @Input() disabled : boolean;
  public showSuggestions : boolean = false;
  public autoCompleteSearchList : Array<string> = [];
  public title : string;  
  public searchTerm : string;
  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();
  public selected;
  public get filteredList() {
    if(this.searchTerm==="" || this.searchTerm===undefined) return this.autoCompleteSearchList;
    let filList= this.autoCompleteSearchList.filter(
      item => item.toLowerCase().startsWith(this.searchTerm.toLocaleLowerCase())
    );
    return filList;
  }
  itemSelected(item: string) {
    debugger;
    this.selectedValue.emit(item);
    this.showSuggestions = false;
    this.searchTerm = item;
  }
  constructor() { }
  public group;
  public ngOnInit() {
    this.autoCompleteSearchList = this.autoCompleteGroup.items;
    this.title = this.autoCompleteGroup.title;
  }
  displaySuggestions() {
    this.showSuggestions = true;
  }
  hideSuggestions() {
    let that = this;
    setTimeout(()=>that.showSuggestions=false,200);
  }
}


import {
    Component,
    OnInit,
    Input,
    ViewChild
  } from '@angular/core';
 import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from 'ng-auto-complete';
  
  @Component({
    selector: 'autoCompleteComponent',
    providers: [
    ],
    templateUrl: './autocomplete/autocomplete.component.html',
    styleUrls:[]
  })
  export class AutoCompleteComponent implements OnInit {
    @Input() autoCompleteSearchList;
     
     @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
    
        Selected(item: SelectedAutocompleteItem) {
         
      }
    constructor() {}
   public group;
    public ngOnInit() {
      this.group = [this.autoCompleteSearchList];  
    }
  }
  
  
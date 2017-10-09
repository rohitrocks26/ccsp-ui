import {
    Component,
    OnInit,
    Input,
    ViewChild
  } from '@angular/core';
  import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
  
  @Component({
    selector: 'autoCompleteComponent',
    providers: [
    ],
    template: `<ng-autocomplete (selected)="Selected($event)" [classes]="['']" [group]="group"></ng-autocomplete>`,
    styles:[`
    .ng-autocomplete-inputs{
      color:black;
    }`]
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
  
  
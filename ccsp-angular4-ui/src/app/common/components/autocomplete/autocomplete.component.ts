
import {
    Component,
    OnInit,
    Input,
    ViewChild,EventEmitter,Output
  } from '@angular/core';
 import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from 'ng-auto-complete';
  
  @Component({
    selector: 'autoCompleteComponent',
    providers: [
    ],
    templateUrl: './autocomplete.component.html',
    styleUrls:[]
  })
  export class AutoCompleteComponent implements OnInit {
    @Input() autoCompleteSearchList;
      @Output() selectedValue : EventEmitter<any> = new EventEmitter<any>(); 
     @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
     public selected;
     emitSelected(selectedItem){
       this.selectedValue.emit({"value": selectedItem});
     }
        Selected(item: SelectedAutocompleteItem) {
           this.selected=item.item.title;
           console.log();
           this.emitSelected(this.selected);
            
        }
    constructor() {}
   public group;
    public ngOnInit() {
      this.group = [this.autoCompleteSearchList];  
    }
  }
  
  
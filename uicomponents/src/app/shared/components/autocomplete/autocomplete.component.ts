import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output,
  ViewEncapsulation,
  forwardRef
} from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoCompleteComponent),
    multi: true
  }
  ],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutoCompleteComponent implements OnInit, ControlValueAccessor {
  @Input() title : string;
  @Input() items : Array<string> = [];
  @Input() disabled: boolean;
  @Input() restrictToGroup : boolean;
  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();

  public showSuggestions: boolean = false;
  public searchTerm: string;
  public selected;
  private propagateChange = (_: any) => { };

  public get filteredList() {
    if (this.searchTerm === "" || this.searchTerm === undefined) return this.items;
    let filList = this.items.filter(
      item => item.toLowerCase().startsWith(this.searchTerm.toLocaleLowerCase())
    );
    return filList;
  }

  get autocompleteValue() {
    return this.searchTerm;
  }
  set autocompleteValue(value) {
    this.searchTerm = value;
    this.propagateChange(this.searchTerm);
  }
  constructor() { }
  itemSelected(item: string) : void {
    this.selectedValue.emit(item);
    this.showSuggestions = false;
    this.autocompleteValue = item;

  }
  public group;
  public ngOnInit() {
  }
  displaySuggestions() : void {
    this.showSuggestions = true;
  }
  hideSuggestions() : void {
    let that = this;
    if(!this.restrictToGroup || this.searchTermInList()) this.autocompleteValue = this.searchTerm;
    setTimeout(() => that.showSuggestions = false, 200);
  }
  writeValue(value: any): void {
    this.autocompleteValue = value;
  }
  searchTermInList() : boolean {
    return this.items.indexOf(this.searchTerm) > -1;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState(isDisabled: boolean): void {
  }
}

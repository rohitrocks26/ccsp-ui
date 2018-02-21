import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteComponent } from './autocomplete.component';
import { By }              from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA }    from '@angular/core';


describe('AutocompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    //debugElement = fixture.debugElement.query(By.css('p'));
   // element = debugElement.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should filter the list according to search term', () => {
    component.items = ['India','USA','New Zealand'];
    component.searchTerm = 'In';
    fixture.detectChanges();
    expect(component.filteredList.length).toBe(1);
    expect(component).toBeTruthy();
  });
  it('should bind the search term to the ngModel', () => {
    component.searchTerm = 'USA';
    fixture.detectChanges();
    expect(component.autocompleteValue).toBe(component.searchTerm);
  });
  it('should emit the selected value', () => {
    component.itemSelected('India');
    component.selectedValue.subscribe(item=> expect(item).toBe('India'));
  });
  it('should hide the suggestions on selection', () => {
    component.itemSelected('India');
    expect(component.showSuggestions).toBeFalsy();
  });
  it('should display the suggestions', () => {
    component.displaySuggestions();
    expect(component.showSuggestions).toBeTruthy();
  });
  it('should trigger hide suggestions on selection', () => {
    component.restrictToGroup = false;
    component.searchTerm='some';
    let spy = spyOn(component,'searchTermInList').and.returnValue(true);
    component.hideSuggestions();
    expect(component.showSuggestions).toBeFalsy();
  });
  // To check if the change is reflected onto the UI
});

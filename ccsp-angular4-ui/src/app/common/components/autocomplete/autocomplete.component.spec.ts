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

  // To check if the change is reflected onto the UI
});

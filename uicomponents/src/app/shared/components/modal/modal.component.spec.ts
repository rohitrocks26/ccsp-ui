import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let debugElement : DebugElement;
  let elementbody : HTMLElement;
  let debugelementHeader : DebugElement;
  let elementheader :HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent  ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    //component.modelinput = { modelHeader : 'Model header', modelContent :"Model Content"}; 
    fixture.detectChanges();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should show the modal', () => {
    component.showModal();
    debugElement = fixture.debugElement.query(By.css('.modal'));
    let el = debugElement.nativeElement;
    expect(el).toBeTruthy();
  });
  it('should hide the modal', () => {
    component.hideModal();
    debugElement = fixture.debugElement.query(By.css('.modal'));
    let el = debugElement.nativeElement;
    expect(el).toBeTruthy();
  });
});

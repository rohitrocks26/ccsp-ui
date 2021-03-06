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
    debugElement = fixture.debugElement.query(By.css('.modal-body'));
    debugelementHeader = fixture.debugElement.query(By.css('.modal-title'));
    elementbody = debugElement.nativeElement;
    elementheader = debugelementHeader.nativeElement;
  });


});

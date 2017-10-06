import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('class="modal"'));
    element = debugElement.nativeElement;
  });

  it('should open modal', () => {
    var open = <HTMLElement>element.getElementsByClassName("btn-success")[0];
     open.click();
     var modal =<HTMLElement>element.getElementsByClassName("modal")[0]; 
     expect(modal.style.display).toContain("block");
  });
});

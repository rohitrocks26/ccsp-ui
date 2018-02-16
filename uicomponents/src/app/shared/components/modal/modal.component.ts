
import { Component, OnInit, Input, ViewChild } from '@angular/core';
declare let $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public modelInput ; 
  @Input() disabled : boolean ; 
  @ViewChild('modalElement') modalElement : any;
  constructor() {}

  ngOnInit() { }
  public showModal() {
    debugger;
    $(this.modalElement.nativeElement).modal();
    $(this.modalElement.nativeElement).modal('show');
  }
  public hideModal() {
    $(this.modalElement.nativeElement).modal('hide');    
  }
}

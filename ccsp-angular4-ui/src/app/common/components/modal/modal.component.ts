import { InputModel } from './../shared/modal/modal.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modelinput ; 
  public inputdata ; 

  constructor() {}

  ngOnInit() { }
}

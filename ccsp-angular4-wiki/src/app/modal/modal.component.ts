import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modeldata ; 
  constructor() { }

  ngOnInit() {
    console.log(">>>>>");
    console.log(this.modeldata);
  }

}

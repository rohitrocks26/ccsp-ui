import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressspinner',
  templateUrl: './progressspinner.component.html',
  styleUrls: ['./progressspinner.component.scss']
})
export class ProgressspinnerComponent implements OnInit {
  @Input() color : string = "black";
  @Input() size : string = "24";
  constructor() { }

  ngOnInit() {
  }

}

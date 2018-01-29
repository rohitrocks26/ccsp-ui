import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressspinner',
  templateUrl: './progressspinner.component.html',
  styleUrls: ['./progressspinner.component.scss']
})
export class ProgressspinnerComponent implements OnInit {
  @Input() width : number = 30;
  @Input() height : number = 30;
  constructor() { }

  ngOnInit() {
  }

}
